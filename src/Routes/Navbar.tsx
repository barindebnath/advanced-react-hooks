import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Menu,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import hooks from "./hooks";
import { useState } from "react";
import colors from "../theme/colors";

const Navbar = () => {
  const currentRoute = useLocation().pathname;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" disableGutters>
        <Toolbar>
          <Typography
            variant="h6"
            mr="auto"
            color={colors.secondary}
            component={Link}
            to="/"
          >
            Advanced Hooks
          </Typography>

          {matches ? (
            <div>
              <span
                onClick={handleClick}
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: colors.secondary,
                }}
              >
                {anchorEl ? "✖" : "☰"}
              </span>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  sx: {
                    padding: "0px",
                  },
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={1}
                  p={1}
                  color={colors.secondary}
                  bgcolor={colors.primary}
                >
                  {hooks.map((hook) => (
                    <Link
                      to={hook.path}
                      key={hook.path}
                      style={{
                        border:
                          "1px solid " +
                          (currentRoute === hook.path
                            ? colors.secondary
                            : "transparent"),
                        padding: "4px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {hook.name}
                    </Link>
                  ))}
                </Box>
              </Menu>
            </div>
          ) : (
            hooks.map((hook) => (
              <Box ml={1} key={hook.path} color={colors.secondary}>
                <Button
                  color="inherit"
                  component={Link}
                  to={hook.path}
                  key={hook.path}
                  variant="outlined"
                  sx={{
                    borderColor:
                      currentRoute === hook.path ? undefined : "transparent",
                  }}
                >
                  {hook.name}
                </Button>
              </Box>
            ))
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
