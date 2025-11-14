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
        value             numeric,
        valuta_id         integer primary key          
);
`);

await db.query(`
    drop table if exists transactions;
    create table transactions (
        hash            text,
        block_id        integer references block (block_id),
        transaction_id  integer primary key,
);
`); 

await db.query(`
    drop table if exists price; 
    create table price (
        price       numeric,
        valuta_id   integer, 
        timestamp   timestamp  
);
`);

await db.query(`
    drop table if exists transfer;
    create table transfer (
        sender              integer references address (address_id),
        reciever            integer references address (address_id), 
        valuta_id           integer references valuta (valuta_id),
        transactions_id     integer references transaction (transaction_id),
        value               numeric
);
`);
        



await db.end();