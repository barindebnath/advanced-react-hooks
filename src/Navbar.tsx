import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }} component={Link} to='/'>
          Advanced Hooks
        </Typography>
        <Button color='inherit' component={Link} to='/useMemo'>
          useMemo
        </Button>
        <Button color='inherit' component={Link} to='/useCallback'>
          useCallback
        </Button>
        {/* Add more buttons for other hooks as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
