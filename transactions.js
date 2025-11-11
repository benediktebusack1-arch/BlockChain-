await db.query(`
    drop table if exists transactions;
    create table transactions (
        hash            text,
        block_id        integer,
        transaction_id  integer,
    );
`); 

