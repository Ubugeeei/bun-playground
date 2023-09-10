import { Database } from "bun:sqlite";

const DB_PATH = "mydb.sqlite";

const { stdout } = Bun.spawn(["ls", DB_PATH]);
if (stdout) Bun.spawn(["rm", "-f", DB_PATH]);

const db = new Database(DB_PATH);

{
  const query = db.query(`CREATE TABLE foo ( value int );`);
  query.run();
}

{
  for (let i = 0; i < 100; i++) {
    const query = db.query(`INSERT INTO foo VALUES (${i});`);
    query.run();
  }
}

{
  const query = db.query(`SELECT * FROM foo;`);
  const rows = query.all();
  console.log(rows);
}
