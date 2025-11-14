await db.query(`
    insert into valuta
    (valuta_id, value)
    values
    (0, null),
    (1, null),
    (2, null)
);