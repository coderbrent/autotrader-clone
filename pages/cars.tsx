import { GetServerSideProps } from "next";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { getMakes, Make } from "../database/getMakes";
import { getModels, Model } from "../database/getModels";
import { getAsString } from "../getAsString";
import CarModel from "../api/Car";
import { getPaginatedCars } from "../database/getPaginatedCars";
import { useRouter } from "next/router";
import Search from './Index';
import { MaterialUiLink } from "../components/MaterialUiLink";

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
  console.log(totalPages)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5} md={3} lg={2}>
        <Search singleColumn makes={makes} models={models} />
      </Grid>
      <Grid item xs={12} sm={7} md={9} lg={10}>
        <pre style={{ fontSize: "3rem" }}>
          <Pagination
            page={parseInt(getAsString(query.page) || "1")}
            count={totalPages}
            renderItem={(item) => (
              <PaginationItem
                component={MaterialUiLink}
                query={query}
                item={item}
                {...item}
              />
            )}
          />
          {JSON.stringify({ totalPages, cars }, null, 4)}
        </pre>
      </Grid>
    </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
      cars: pagination.cars,
      totalPages: pagination.totalPages,
    },
  };
};
