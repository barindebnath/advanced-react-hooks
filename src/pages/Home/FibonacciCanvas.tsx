import { useRef, useEffect, memo, useState } from "react";
import { Grid } from "@mui/material";
import colors from "../../theme/colors";

const FibonacciCanvas = ({ fibCount }: { fibCount: number }) => {
  const [canvasSize, setCanvasSize] = useState({ width: 400, height: 300 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fibonacciSequence = () => {
    const sequence = [0, 1];
    for (let i = 2; i < fibCount; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  };

  // Function to draw Fibonacci spiral on canvas
  function drawFibonacciSpiral(fibonacciSequence: number[]) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let angle = 0;
    let radius = 0;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const svgColors = [
      "#DA70D6",
      "#20B2AA",
      "#87CEEB",
      "#fc94c8",
      "#98FB98",
      "#B0E0E6",
      "#ADFF2F",
      "#f6998e",
      "#90EE90",
      "#FFD700",
      "#7FFF00",
      "#D3D3D3",
      "#eaf07c",
      "#87CEFA",
      "#FFE4E1",
      "#40E0D0",
      "#F08080",
    ];
    const texts = ["useRef", "useMemo", "useCallback"]; // Texts for circles

    fibonacciSequence.forEach((fibonacciNumber, index) => {
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      radius += fibonacciNumber * 1; // Scale factor for spacing between turns

      if (fibonacciNumber < 5) return;

      context.beginPath();
      context.arc(x, y, fibonacciNumber, 0, 2 * Math.PI);
      context.fillStyle = svgColors[index % svgColors.length]; // Use modulo to cycle through svgColors
      context.fill();

      // Draw text in the circle
      if (fibonacciNumber > 50) {
        context.save(); // Save the current state of the context
        context.translate(x, y); // Translate to the center of the circle
        context.rotate(angle + Math.PI / 3 + fibonacciNumber); // Rotate the text by 45 degrees
        context.fillStyle = colors.secondary;
        context.font = "20px Arial";
        const text = texts[index % texts.length];
        const textWidth = context.measureText(text).width;
        context.fillText(text, -textWidth / 2, 5); // Adjust the position of the text
        context.restore(); // Restore the saved state of the context
      }

      angle += Math.PI / 2; // 90 degrees turn for each Fibonacci number
    });
  }

  useEffect(
    () => drawFibonacciSpiral(fibonacciSequence()),
    [fibCount] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    // set canvas dimentions
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    setCanvasSize({
      width: parent.offsetWidth,
      height: parent.offsetHeight,
    });
  }, []);

  return (
    <Grid container justifyContent="center" height="100%" width="100%">
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
      />
    </Grid>
  );
};

export const MemoizedFibonacciCanvas = memo(FibonacciCanvas);
export default FibonacciCanvas;
