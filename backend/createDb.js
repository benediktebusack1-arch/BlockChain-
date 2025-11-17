import pg from 'pg';
import dotenv from 'dotenv';


dotenv.config();
console.log('Connecting to database', process.env.PG_DATABASE);
const db = new pg.Pool({
    host:     process.env.PG_HOST,
    port:     parseInt(process.env.PG_PORT),
    database: process.env.PG_DATABASE,
    user:     process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl:      { rejectUnauthorized: false },
});
const dbResult = await db.query('select now()');
console.log('Database connection established on', dbResult.rows[0].now);


await db.query(`
    drop table if exists block;
    create table block (
        hash       numeric,
        timestamp  timestamp,
        block_id   integer
);
`);
        
await db.query(`
    drop table if exists address;
    create table address (
        address_id    integer primary key,
        address       text
);
`);

await db.query(`
    drop table if exists valuta;
    create table valuta (
        name              text,
        symbol            text,
        valuta_id         integer primary key          
);
`);

await db.query(`
    drop table if exists transactions;
    create table transactions (
        hash            text,
        block_id        integer references block,
        transaction_id  integer primary key,
);
`); 

await db.query(`
    drop table if exists price; 
    create table price (
        price       numeric,
        valuta_id   integer references valuta, 
        timestamp   timestamp  
);
`);

await db.query(`
    drop table if exists transfer;
    create table transfer (
        sender              integer references address,
        reciever            integer references address, 
        valuta_id           integer references valuta,
        transactions_id     integer references transaction,
        value               numeric
);
`);
    

await db-query(`
    insert into block
    (block_id, hash, timestamps)
    values
    (0, '000ffe7', '2025-10-01T07:30:00Z'),
    (1, '0002a81', '2025-10-03T14:00:00Z'),
    (2, '0003bb6', '2025-10-09T22:30:00Z')
`);

await db.query(`
    insert into valuta
    (valuta_id, name, symbol)
    values
    (3, 'Ether', 'ETH'),
    (4, 'Chainlink', 'LINK'),
    (5, 'USD Coin', 'USDC'),

);
`);

await db-query(`
    insert into price
    (valuta_id, price, timestamp)
    values
    (3, 2500, '2025-10-01T07:30:00Z'),
    (4, 10, '2025-10-01T07:30:00Z'),
    (5, 1, '2025-10-01T07:30:00Z'),
    (3, 2300, '2025-10-03T14:00:00Z'),
    (4, 9, '2025-10-03T14:00:00Z'),
    (5, 1, '2025-10-03T14:00:00Z'),
    (3, 2400, '2025-10-09T22:30:00Z'),
    (4, 12, '2025-10-09T22:30:00Z'),
    (5, 1, '2025-10-09T22:30:00Z')
`);

await db.query(`
    insert into transaction
    (hash, block_id, transaction_id) 
    values
    ('5ac6', 0, 1),
    ('78af', 1, 2),
    ('9cb6', 1, 3),
    ('04aa', 1, 4),
    ('af78', 2, 5),
    ('9033', 2, 6),
    ('acdf', 2, 7)
`)

await db.query(`
    insert into adress
    (adress_id, adress)
    values
    (6, 'coinbase'),
    (7, 'a0324425e7'),
    (8, 'b07c7e7df3'),
    (9, 'c0acb3be5f'),
    (10, 'd03894efe8'),
    (11, 'e000c0d932'),
    (12, 'f076a8cbb0')
`)

await db.query(`
    insert into transfer
    (valuta_id, transaction_id, sender, reciever, value)
    values
    (3, 1, 6, 7, 5),
    (3, 2, 6, 7, 5),
    (3, 3, 7, 8, 2),
    (3, 3, 7, 10, 2),
    (3, 4, 7, 12, 3),
    (4, 4, 12, 7, 760),
    (3, 5, 6, 9, 5),
    (4, 6, 7, 11, 540),
    (3, 6, 7, 11, 1),
    (3, 7, 10, 12, 1),
    (5, 7, 12, 10, 2390)
`)

await db.end();
