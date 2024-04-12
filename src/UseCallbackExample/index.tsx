import { memo, useCallback, useState } from "react";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import RegularComponent from "./RegularComponent";

const MemoizedComponent = memo(RegularComponent);

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  border: `3px solid #1976d2`,
  width: "100%",
});

const CounterButton = styled(Button)(({ theme }) => ({
  minWidth: "25%",
  minHeight: theme.spacing(4),
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  padding: theme.spacing(2),
  border: `3px solid #1976d2`,
  borderRadius: "0px",
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
}));

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [titles, setTitles] = useState({
    memoized: "Memoized component",
    regular: "Regular Component",
  });

  const handleIncrement = () => setCount((prev) => prev + 1);

  const backgroundColor = (darkness: number) => `rgba(25, 118, 210, ${darkness * 0.003})`;

  return (
    <StyledContainer>
      {/* <div>
        <TextField
          label='Outlined'
          variant='outlined'
          value={titles.memoized}
          onChange={(event) => {
            setTitles((prev) => ({ ...prev, memoized: event.target.value }));
          }}
        /> */}
      <CounterButton onClick={handleIncrement}>
        {count === 0 ? "Click" : "Clicks"} {count}
      </CounterButton>
      {/* <TextField
          label='Outlined'
          variant='outlined'
          value={titles.regular}
          onChange={(event) => {
            setTitles((prev) => ({ ...prev, regular: event.target.value }));
          }}
        />
      </div> */}
      <Grid container flexGrow={1}>
        <Grid item xs={12} sm={6} p={{ xs: "16px 0 0", sm: "16px" }}>
          <MemoizedComponent
            title={titles.memoized}
            handleIncrement={useCallback(handleIncrement, [])}
            backgroundColor={useCallback(backgroundColor, [])}
          />
        </Grid>
        <Grid item xs={12} sm={6} p={{ xs: "16px 0 0", sm: "16px" }}>
          <RegularComponent
            title={titles.regular}
            handleIncrement={handleIncrement}
            backgroundColor={backgroundColor}
          />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default UseCallbackExample;
