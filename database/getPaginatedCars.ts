import { ParsedUrlQuery } from "querystring";
import { getAsString } from "../utils/getAsString";
import CarModel from '../api/Car';
import { db } from '../db';

export async function getPaginatedCars(query: ParsedUrlQuery) {
  const page = getValueNum(query.page) || 1;
  const rowsPerPage = getValueNum(query.rowsPerPage) || 4;
  const offset = (page - 1) * rowsPerPage;

  const dbParams = { //we parse the url query for strings to use
    make: getValueStr(query.make),
    model: getValueStr(query.model),
    minPrice: getValueNum(query.minPrice),
    maxPrice: getValueNum(query.maxPrice),
  };

  const carsPromise = await db.query<CarModel[]>
    (`SELECT * FROM cars
    WHERE (? is NULL OR ? = make)
    AND (? is NULL OR ? = make)
    AND (? is NULL OR ? <= price)
    AND (? is NULL OR ? >= price)
    LIMIT ? OFFSET ?`, 
    [
      dbParams.make, 
      dbParams.make,
      dbParams.model,
      dbParams.make,
      dbParams.minPrice,
      dbParams.minPrice,
      dbParams.maxPrice,
      dbParams.maxPrice,
      rowsPerPage,
      offset
    ]);

  const totalRowsPromise = db.query(
    `SELECT COUNT(*) as total FROM cars
    WHERE (? is NULL OR ? = make)
    AND (? is NULL OR ? = make)
    AND (? is NULL OR ? <= price)
    AND (? is NULL OR ? >= price)
    LIMIT ? OFFSET ?`, 
    [
      dbParams.make, 
      dbParams.make,
      dbParams.model,
      dbParams.make,
      dbParams.minPrice,
      dbParams.minPrice,
      dbParams.maxPrice,
      dbParams.maxPrice,
      rowsPerPage,
      offset
    ]);

  const [cars, totalRows] = 
    await Promise.all([carsPromise, totalRowsPromise]);

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
