await db-query(`
    insert into block
    (block_id, hash, timestamps)
    values
    (0, '000ffe7', '2025-10-01T07:30:00Z)
    (1, '0002a81', '2025-10-03T14:00:00Z)
    (2, '0003bb6', '2025-10-09T22:30:00Z)
`);

await db-query(`
    insert into price
    (valuta_id, price, timestamp)
    value
    ()

`);
