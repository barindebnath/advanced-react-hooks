import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import colors from "./colors";

interface CircleStyle {
  left?: string;
  width?: string;
  height?: string;
  animationDelay?: string;
  animationDuration?: string;
}

// Define the animation using keyframes
const animate = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

const Area = styled("div")({
  backgroundColor: colors.primary,
  width: "100%",
  height: "100vh",
});

const CirclesList = styled("ul")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

const Circle = styled("li")({
  position: "absolute",
  display: "block",
  listStyle: "none",
  width: "20px",
  height: "20px",
  backgroundColor: colors.secondary + "80",
  animation: `${animate} 25s linear infinite`,
  bottom: "-200px",
});

const generateCSSForCircles = (count: number): Record<number, CircleStyle> => {
  // Generate a unique set of styles for each circle
  const circleStyles = Array.from({ length: count }, () => {
    const baseLeft = Math.random() * 90; // Randomly generated base value between 10 and 100
    const baseWidthHeight = Math.floor(Math.random() * 180) + 10; // Randomly generated base value between 10 and 190
    const animationDelay = Math.floor(Math.random() * 30); // Randomly generated value between 0 and 29 seconds
    const animationDuration = Math.floor(Math.random() * 60) + 10; // Randomly generated value between 10 and 60 seconds

    return {
      left: `${baseLeft}%`,
      width: `${baseWidthHeight}px`,
      height: `${baseWidthHeight}px`,
      animationDelay: `${animationDelay}s`,
      animationDuration: `${animationDuration}s`,
    };
  });

  // Construct the Circle.prototype object
  const CirclePrototype: Record<number, CircleStyle> = {};
  for (let i = 0; i < count; i++) {
    CirclePrototype[i + 1] = circleStyles[i];
  }

  return CirclePrototype;
};

Circle.prototype = generateCSSForCircles(10);

const FloatingShapes = () => (
  <Area>
    <CirclesList>
      {[...Array(10).keys()].map((_, index) => (
        <Circle key={index} style={Circle.prototype[index + 1]} />
      ))}
    </CirclesList>
  </Area>
);

export default FloatingShapes;
