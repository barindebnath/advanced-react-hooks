import { Routes, Route, useLocation } from "react-router-dom";

import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Home from "./Home";
import Navbar from "./Navbar";
import UseMemoExample from "./UseMemoExample";
import UseCallbackExample from "./UseCallbackExample";

const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "800px",
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.down("sm")]: {
    minHeight: "100vh",
  },
}));

function App() {
  const location = useLocation();

  return (
    <Container maxWidth='xl' disableGutters>
      <StyledDiv>
        {location.pathname !== "/" && <Navbar />}
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/usememo' element={<UseMemoExample />} />
            <Route path='/usecallback' element={<UseCallbackExample />} />
          </Routes>
        </Box>
      </StyledDiv>
    </Container>
  );
}

export default App;
