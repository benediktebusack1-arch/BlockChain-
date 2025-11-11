await db.query(`
     create table block (
        hash       numeric,
        timestamp  timestamp,
        block-id   integer
    );
`);