import { useCallback, useState } from "react";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import RegularComponent, { MemoizedComponent } from "./ChildComponent";
import colors from "../../theme/colors";
import PageLayout from "../../theme/PageLayout";
import { Box } from "@mui/material";

const CounterButton = styled(Button)(({ theme }) => ({
  minWidth: "100%",
  minHeight: theme.spacing(4),
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  padding: theme.spacing(2),
  border: `3px solid ${colors.secondary}`,
  borderRadius: "0px",
  color: colors.secondary,
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
}));

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);

  return (
    <PageLayout>
      <Box p={2}>
        <CounterButton onClick={handleIncrement}>
          {count} {count === 1 ? "Click" : "Clicks"}
        </CounterButton>
      </Box>
      <Grid container flexGrow={1} spacing={2} p={2}>
        <Grid item xs={12} sm={6} md={4}>
          <RegularComponent
            title="Regular Component"
            handleIncrement={handleIncrement}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MemoizedComponent
            title="Memoized Component without useCallback"
            handleIncrement={handleIncrement}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MemoizedComponent
            title="Memoized component with useCallback"
            handleIncrement={useCallback(handleIncrement, [])}
          />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default UseCallbackHook;
