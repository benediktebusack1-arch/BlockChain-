await db.query(`
     create table price (
        price       numeric,
        valuta-id   integer, 
        timestamp   timestamp  
    );
`);