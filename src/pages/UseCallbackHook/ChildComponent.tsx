import { memo, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import colors from "../../theme/colors";

interface RegularComponentProps {
  title: string;
  handleIncrement: () => void;
}

const RegularComponent = (props: RegularComponentProps) => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  const backgroundColor = (darkness: number) =>
    `rgba(25, 118, 210, ${darkness * 0.003})`;

  useEffect(
    () => () => {
      renderCount.current = 0;
    },
    []
  );

  return (
    <Box
      bgcolor={backgroundColor(renderCount.current)}
      border={`3px solid ${colors.secondary}`}
      p={2}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h6" mb="auto">
        {props.title}
      </Typography>
      <Typography variant="h4" mt="4px" mb="16px">
        {renderCount.current} Render{renderCount.current === 1 ? "" : "s"}
      </Typography>
      <Button
        onClick={props.handleIncrement}
        variant="contained"
        size="large"
        style={{ backgroundColor: colors.secondary, color: colors.primary }}
      >
        Click Me
      </Button>
    </Box>
  );
};

export const MemoizedComponent = memo(RegularComponent);
export default RegularComponent;
