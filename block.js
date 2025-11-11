await db.query(`
     create table block (
        hash       numeric,
        timestamp  timestamp,
        block_id   integer
    );
`);