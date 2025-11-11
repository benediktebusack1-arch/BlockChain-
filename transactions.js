await db.query(`
    drop table if exists transactions;
    create table transactions (
        hash            text,
        block_id        integer references block (block_id),
        transaction_id  integer primary key,
    );
`); 

