import { Box } from "@mui/material";
import PageLayout from "../../theme/PageLayout";
import useMousePosition from "../../hooks/useMousePosition";
import { MemoizedFibonacciCanvas } from "./FibonacciCanvas";

const Home = () => {
  const { x, y } = useMousePosition();

  return (
    <PageLayout fullWidth>
      <Box position="absolute" top={0} right={0} bottom={0} left={0}>
        <MemoizedFibonacciCanvas fibCount={Math.max(x, y)} />
      </Box>
    </PageLayout>
  );
};

export default Home;
