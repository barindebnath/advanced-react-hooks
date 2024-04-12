import { Link } from "react-router-dom";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

const Home = () => {
  const hooks = [
    { name: "useMemo", path: "/usememo" },
    { name: "useCallback", path: "/usecallback" },
    // Add more hooks as needed
  ];

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item xs={12}>
        <Typography variant='h4' gutterBottom>
          Advanced React Hooks
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {hooks.map((hook, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={hook.path}
              sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
            >
              <ListItemText primary={hook.name} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Home;
