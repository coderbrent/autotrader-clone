import { PrismaClient } from '@prisma/client';

export interface Model {
  model: string;
  count: number;
}

const prisma = new PrismaClient();

export async function getModels(make: string) {
  const model = await prisma.cars.findMany<Model[]>({
    where: {
      make: make
    }
  });

  return model;
}

`SELECT model, count(*) as count 
    FROM cars 
    WHERE make = ? 
    GROUP BY model`
