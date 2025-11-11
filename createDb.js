await db.query(`
    drop table if exists valuta;
    create table valuta (
    value             numeric,
    valuta_id         integer primary key          

    );
`);


await db.query(`
    drop table if exists adress;
    create table adress (
        adress_id    integer

    );
`);

await db.query(`
     create table block (
        hash       numeric,
        timestamp  timestamp,
        block_id   integer
    );
`);