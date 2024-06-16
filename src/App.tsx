import { Box } from "@mui/material";
import Routes from "./Routes";
import FloatingShapes from "./theme/FloatingShapes";

const App = () => (
  <>
    <Box position="absolute" top={0} right={0} bottom={0} left={0}>
      <FloatingShapes />
    </Box>
    <Routes />
  </>
);

export default App;
