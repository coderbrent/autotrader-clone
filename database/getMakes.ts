import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Make {
  make: string;
  count: number;
}

export async function getMakes() {
  const makes = await prisma.cars.findMany();
  return makes;
}
