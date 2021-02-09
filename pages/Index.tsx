import { GetServerSideProps } from "next";
import { getMakes, Make } from "../database/getMakes";
import { getModels, Model } from "../database/getModels";
import { Formik, Form, Field } from "formik";
import {
  Paper,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";
import { ModelSelect } from "../components/ModelSelect";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import router, { useRouter } from "next/router";
import { getAsString } from "../getAsString";
import { useState } from "react";

export interface HomeProps {
  makes: Make[];
  models: Model[];
  singleColumn?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: "auto",
      maxWidth: 500,
      padding: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const prices = [500, 1000, 5000, 15000, 25000, 900000];

export default function Search({ makes, models, singleColumn }: HomeProps) {
  const classes = useStyles();
  const { query } = useRouter();
  const smValue = singleColumn ? 12 : 6;

  const [initialValues] = useState({
    make: getAsString(query.make) || "all",
    model: getAsString(query.model) || "all",
    minPrice: getAsString(query.minPrice) || "all",
    maxPrice: getAsString(query.maxPrice) || "all",
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        router.push(
          {
            pathname: "/cars",
            query: { ...values, page: 1 },
          },
          undefined,
          { shallow: true }
        );
      }}
    >
      {({ values }) => (
        <Form>
          <Paper elevation={5} className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={smValue}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel id='search-make'>Make</InputLabel>
                  <Field
                    name='make'
                    as={Select}
                    labelId='search-make'
                    label='Make'
                  >
                    <MenuItem value='all'>
                      <em>All Makes</em>
                    </MenuItem>
                    {makes.map((make) => (
                      <MenuItem key={make.make} value={make.make}>
                        {`${make.make} (${make.count})`}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={smValue}>
                <ModelSelect
                  initialMake={initialValues.make}
                  make={values.make}
                  name='model'
                  models={models}
                />
              </Grid>
              <Grid item xs={12} sm={smValue}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel id='search-min-price'>Min Price</InputLabel>
                  <Field
                    name='minPrice'
                    as={Select}
                    labelId='search-min-price'
                    label='Min Price'
                  >
                    <MenuItem value='all'>
                      <em>No Min</em>
                    </MenuItem>
                    {prices.map((price, i) => (
                      <MenuItem key={i} value={price}>
                        {price}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={smValue}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel id='search-max-price'>Max Price</InputLabel>
                  <Field
                    name='maxPrice'
                    as={Select}
                    labelId='search-max-price'
                    label='Max Price'
                  >
                    <MenuItem value='all'>
                      <em>No Max</em>
                    </MenuItem>
                    {prices.map((price) => (
                      <MenuItem key={price} value={price}>
                        {price}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  fullWidth
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const make = getAsString(ctx.query.make);
  const [makes, models] = await Promise.all([getMakes(), getModels(make)]);

  return { props: { makes, models } };
};
