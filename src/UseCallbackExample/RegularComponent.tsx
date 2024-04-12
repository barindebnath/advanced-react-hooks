import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

interface RegularComponentProps {
  title: string;
  backgroundColor: (darkness: number) => string;
  handleIncrement: () => void;
}

let renderCount = 0;
const RegularComponent = (props: RegularComponentProps) => {
  renderCount = renderCount + 1;

  useEffect(
    () => () => {
      renderCount = 0;
    },
    []
  );

  return (
    <Box bgcolor={props.backgroundColor(renderCount)} border='3px solid #1976d2' p={2} height='100%'>
      <Typography variant='h6'>{props.title}</Typography>
      <Typography variant='h4'>Render count: {renderCount}</Typography>
      <Button onClick={props.handleIncrement} variant='contained' size='large'>
        Click Me
      </Button>
    </Box>
  );
};

export default RegularComponent;
