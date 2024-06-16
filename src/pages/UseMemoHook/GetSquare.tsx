import { useMemo } from "react";
import { Box, Slider, Typography } from "@mui/material";

const GetSquare = (props: {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  isMemo: boolean;
}) => {
  const memoizedSquare = useMemo(
    () => slowFunction(props.number),
    [props.number]
  );

  return (
    <>
      <Typography gutterBottom>Pick a number to square.</Typography>
      <Box pr={4}>
        <Slider
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="off"
          onChange={(_, value) =>
            typeof value === "number" && props.setNumber(value)
          }
          min={0}
          max={100}
          step={10}
          marks={Array.from({ length: 11 }).map((_, index) => ({
            value: index * 10,
            label: index * 10,
          }))}
        />
      </Box>
      <Typography variant="h6">
        {`Square of ${props.number} is ${
          props.isMemo ? memoizedSquare : slowFunction(props.number)
        }`}
      </Typography>
      <Typography mt={2}>
        This computation intentionally slows down, but it should not recalculate
        when working on other functions. Use the useMemo hook to prevent
        recalculating this function on each render.
      </Typography>
    </>
  );
};

export default GetSquare;

const slowFunction = (number: number) => {
  for (let i = 0; i <= 999999999; i++) {
    /* empty */
  }
  return number * number;
};
