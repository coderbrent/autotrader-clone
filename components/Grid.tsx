import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    img: {
      width: "100%"
    }
  })
);

export default function GridComp(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img
              className={classes.img}
              alt="vehicle"
              src={props.photoUrl}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  {props.make}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {props.model} 
                </Typography>
                <Typography variant="body2" gutterBottom>
                  year: {props.year} 
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.details}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                <Button color={'secondary'} variant={'contained'} >
                  Make an Offer
                </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <Typography variant="subtitle1">${props.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
