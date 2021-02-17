import { useState } from 'react';
import { GetServerSideProps } from "next";
import { Grid } from "@material-ui/core";
import { getMakes, Make } from "../database/getMakes";
import { getModels, Model } from "../database/getModels";
import { getAsString } from "../utils/getAsString";
import CarModel from "../api/Car";
import { getPaginatedCars } from "../database/getPaginatedCars";
import { useRouter } from "next/router";
import Search from './Index';
import { stringify } from 'querystring';
import useSWR from "swr";
import deepEqual from 'fast-deep-equal';
import { CarPagination } from '../components/CarPagination';
import { CarCard } from '../components/CarCard';

export interface CarsListProps {
  makes: Make[];
  models: Model[];
  cars: CarModel[];
  totalPages: number;
}

export default function CarsList({
  makes,
  models,
  cars,
  totalPages,
}: CarsListProps) {
  const { query } = useRouter();
  const [serverQuery] = useState(query);

  const { data } = useSWR('/api/cars?' + stringify(query), {
    dedupingInterval: 10000,
    initialData: deepEqual(query, serverQuery)
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5} md={3} lg={2}>
        <Search singleColumn makes={makes} models={models} />
      </Grid>
      <Grid item xs={12} sm={7} md={9} lg={10}>
      <CarPagination totalPages={totalPages} />
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        <CarPagination totalPages={totalPages} />
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps<CarsListProps> = async (ctx) => {
  const make = getAsString(ctx.query.make);
  const [makes, models, pagination] = await Promise.all([
    getMakes(),
    getModels(make),
    getPaginatedCars(ctx.query),
  ]);

  return {
    props: {
      makes,
      models,
      cars: JSON.parse(JSON.stringify(pagination.cars)),
      totalPages: pagination.totalPages,
    },
  };
};
