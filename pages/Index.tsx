import { GetServerSideProps } from "next";
import { getMakes, Make } from "../database/getMakes";
import { Formik, Form, Field } from "formik";
import {
  Paper,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useRouter } from "next/router";

export interface HomeProps {
  makes: Make[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: "auto",
      maxWidth: 500,
      padding: theme.spacing(3)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

const prices = [500, 1000, 5000, 15000, 25000, 900000];

export default function Home({ makes }: HomeProps) {
  const classes = useStyles();
  const { query } = useRouter();

  const initValues = {
    make: query.make || "all",
    model: query.model || "all",
    minPrice: query.minPrice || "all",
    maxPrice: query.maxPrice || "all"
  };

  return (
    <Formik initialValues={{ initValues }} onSubmit={() => {}}>
      {({ values }) => (
        <Form>
          <Paper className={classes.paper} elevation={5}>
            <Grid spacing={3} container>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Make
                  </InputLabel>
                  <Field
                    name="make"
                    as={Select}
                    labelId="search-make"
                    id="make"
                  >
                    <MenuItem value="">
                      <em>All Makes</em>
                    </MenuItem>
                    {makes.map(make => (
                      <MenuItem value={make.make}>
                        <em>
                          {make.make} ({make.count})
                        </em>
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-min-price">Minimum Price</InputLabel>
                  <Field
                    name="minPrice"
                    as={Select}
                    labelId="search-min-price"
                    label="Min Price"
                  >
                    <MenuItem value="all">
                      <em>No Min</em>
                    </MenuItem>
                    {prices.map(price => (
                      <MenuItem value={price}>
                        <em>{price}</em>
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-max-price">Maximum Price</InputLabel>
                  <Field
                    name="maxPrice"
                    as={Select}
                    labelId="search-max-price"
                    label="Max Price"
                  >
                    <MenuItem value="all">
                      <em>No Max</em>
                    </MenuItem>
                    {prices.map(price => (
                      <MenuItem value={price}>
                        <em>{price}</em>
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                MAX
              </Grid>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const makes = await getMakes();
  return { props: { makes } };
};
