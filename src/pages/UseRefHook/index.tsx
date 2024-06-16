import { useEffect, useRef } from "react";
import { Box, Grid, TextField, Typography, styled } from "@mui/material";
import PageLayout from "../../theme/PageLayout";
import colors from "../../theme/colors";

const StyledBox = styled(Box)(({ theme }) => ({
  border: `3px solid ${colors.secondary}`,
  padding: theme.spacing(2),
  height: "100%",
}));

const UseRefHook = () => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  const outputRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(
    () => () => {
      renderCount.current = 0;
    },
    []
  );

  return (
    <PageLayout>
      <Grid container flexGrow={1} spacing={2} p={2}>
        <Grid item xs={12} sm={6} md>
          <StyledBox>
            <Typography gutterBottom>Enter a message</Typography>
            <TextField
              fullWidth
              onChange={(e) =>
                outputRef.current &&
                (outputRef.current.textContent = e.target.value)
              }
            />
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md>
          <StyledBox>
            <Typography gutterBottom>
              Displaying the entered message using useRef hook
            </Typography>
            <Typography ref={outputRef} color="black" />
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={6} md="auto">
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
export default UseRefHook;
