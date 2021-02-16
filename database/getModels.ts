import { query } from '../db';

export interface Model {
  model: string;
  count: number;
}

export async function getModels(make: string) {
  const model = await query<Model[]>(`
    SELECT model, count(*) as count
    FROM cars
    WHERE make = ?
    GROUP BY model`, [make]);

  return model;
}