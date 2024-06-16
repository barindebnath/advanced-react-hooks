import { Grid, Switch, Typography } from "@mui/material";

const ThemeToggler = (props: { isDark: boolean }) => (
  <>
    <Typography gutterBottom>Toggle dark/light box</Typography>
    <Switch checked={props.isDark} />
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100px"
      bgcolor={props.isDark ? "black" : "white"}
      color={props.isDark ? "white" : "black"}
    >
      {props.isDark ? "BLACK" : "WHITE"}
    </Grid>
  </>
);

export default ThemeToggler;
