await db.query(`
     create table transfer (
        sender              integer,
        reciever            integer, 
        valuta-id           integer,
        transactions-id     integer,
        value               numeric
    );
`);