import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Make {
  make: string;
  count: number;
}

export async function getMakes() {
  const makes = await prisma.$queryRaw`
    SELECT make, COUNT(*) as count
    FROM cars
    GROUP BY make
  `;
  return makes;
}
