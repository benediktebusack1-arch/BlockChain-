await db.query(`
    drop table if exists adress;
    create table adress (
        adress_id    integer,
        adress       text

    );
`);