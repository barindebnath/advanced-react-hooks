import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

import Navbar from "../Routes/Navbar";
import colors from "./colors";

const StyledDiv = styled("div", {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<{
  bgColor: string;
}>(({ bgColor }) => ({
  backgroundColor: bgColor,
}));

const StyledContainer = styled(Container)({
  minHeight: "calc(100vh - 64px)",
  color: colors.secondary,
  paddingTop: "32px",
  position: "relative",
});

const PageLayout = (props: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) => (
  <StyledDiv bgColor={colors.secondary}>
    <Navbar />
    <StyledContainer maxWidth={props.fullWidth ? false : "xl"} disableGutters>
      {props.children}
    </StyledContainer>
  </StyledDiv>
);

export default PageLayout;
