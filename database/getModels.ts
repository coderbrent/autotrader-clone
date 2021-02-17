import { dbQuery } from '../db';

export interface Model {
  model: string;
  count: number;
}

export async function getModels(make: string) {
  const model = await dbQuery(`
    SELECT model, count(*) as count
    FROM cars
    WHERE make = ?
    GROUP BY model`, [make]);

  return <Model[]>model;
}