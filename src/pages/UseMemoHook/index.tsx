import { useEffect, useRef, useState } from "react";
import { Box, Grid, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PageLayout from "../../theme/PageLayout";
import GetSquare from "./GetSquare";
import ThemeToggler from "./ThemeToggler";
import colors from "../../theme/colors";

const StyledBox = styled(Box)(({ theme }) => ({
  border: `3px solid ${colors.secondary}`,
  padding: theme.spacing(2),
  height: "100%",
}));

const UseMemoHook = () => {
  const [isMemo, setIsMemo] = useState(false);
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  useEffect(
    () => () => {
      renderCount.current = 0;
    },
    []
  );

  return (
    <PageLayout>
      <Grid container flexGrow={1} spacing={2} p={2}>
        <Grid item xs={12} sm={6} md="auto">
          <StyledBox onClick={() => setIsMemo((prev) => !prev)}>
            <Typography gutterBottom>Toggle useMemo hook</Typography>
            <Switch checked={isMemo} />
            <Typography variant="h6">
              useMemo is {isMemo ? "ON" : "OFF"}
            </Typography>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md>
          <StyledBox>
            <GetSquare number={number} setNumber={setNumber} isMemo={isMemo} />
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md>
          <StyledBox onClick={() => setIsDark((prev) => !prev)}>
            <ThemeToggler isDark={isDark} />
          </StyledBox>
        </Grid>
        <Grid item xs={12}>
          <StyledBox>
            <Typography gutterBottom>
              This indicates the total number of renders for this page.
            </Typography>
            <Typography variant="h4" mt="4px" mb="16px">
              {renderCount.current} Render{renderCount.current === 1 ? "" : "s"}
            </Typography>
          </StyledBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
export default UseMemoHook;
