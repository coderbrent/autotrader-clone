import { dbQuery } from '../db';

export interface Make {
  make: string;
  count: number;
}

export async function getMakes() {
  const makes = await dbQuery(`
    SELECT make, COUNT(*) as count
    FROM cars
    GROUP BY make
  `);
// a little contrived, but had to do this to satisfy nexts need for
// a POJO "plain old javascript object" when using getServerSideProps.
  let obj = JSON.parse(JSON.stringify(makes))

  let pojo = {
    obj
  }

  return <Make[]>pojo.obj;
}
