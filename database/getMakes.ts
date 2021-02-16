import { query } from '../db';

export interface Make {
  make: string;
  count: number;
}

export async function getMakes() {
  const makes = await query(`
    SELECT make, COUNT(*) as count
    FROM cars
    GROUP BY make
  `);

  return makes;
}
