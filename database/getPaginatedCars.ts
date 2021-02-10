import { ParsedUrlQuery } from "querystring";
import { getAsString } from "../getAsString";
import { PrismaClient } from '@prisma/client';
import CarModel from '../api/Car';

const prisma = new PrismaClient();

export async function getPaginatedCars(query: ParsedUrlQuery) {
  const page = getValueNum(query.page) || 1;
  const rowsPerPage = getValueNum(query.rowsPerPage) || 4;
  const offset = (page - 1) * rowsPerPage;

  const dbParams = {
    make: getValueStr(query.make),
    model: getValueStr(query.model),
    minPrice: getValueNum(query.minPrice),
    maxPrice: getValueNum(query.maxPrice),
  };

  const carsPromise = await prisma.$queryRaw<CarModel[]>
    `SELECT * FROM cars
    WHERE (${dbParams.make} is NULL OR ${dbParams.make} = make)
    AND (${dbParams.model} is NULL OR ${dbParams.make} = make)
    AND (${dbParams.minPrice} is NULL OR ${dbParams.minPrice} <= price)
    AND (${dbParams.maxPrice} is NULL OR ${dbParams.maxPrice} >= price)
    LIMIT ${rowsPerPage} OFFSET ${offset}`;

  const totalRowsPromise = prisma.$queryRaw
    `SELECT COUNT(*) as total FROM cars
    WHERE (${dbParams.make} is NULL OR ${dbParams.make} = make)
    AND (${dbParams.model} is NULL OR ${dbParams.make} = make)
    AND (${dbParams.minPrice} is NULL OR ${dbParams.minPrice} <= price)
    AND (${dbParams.maxPrice} is NULL OR ${dbParams.maxPrice} >= price)
    LIMIT ${rowsPerPage} OFFSET ${offset}`

  const [cars, totalRows] = await Promise.all([carsPromise, totalRowsPromise]).finally(async () => await prisma.$disconnect());
  return { cars, totalPages: Math.ceil(totalRows[0].total / rowsPerPage)};
}

function getValueNum(value: string | string[]) {
  const str = getValueStr(value);
  const number = parseInt(str);
  return isNaN(number) ? null : number;
}

function getValueStr(value: string | string[]) {
  const str = getAsString(value);
  return !str || str.toLowerCase() === "all" ? null : str;
}
