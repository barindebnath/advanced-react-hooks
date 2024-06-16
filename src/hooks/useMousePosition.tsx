import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    if (typeof window === "undefined") return;

    const rect = window.document.body.getBoundingClientRect();
    const elementWidth = rect.width;
    const elementHeight = rect.height;

    // Calculate relative coordinates
    const x = Math.abs(event.clientX - rect.left - elementWidth / 2);
    const y = Math.abs(event.clientY - rect.top - elementHeight / 2);

    // Constrain values to 0-16 range
    const clampedX =
      (Math.min(Math.max(x, 0), elementWidth) / elementWidth) * 50;
    const clampedY =
      (Math.min(Math.max(y, 0), elementHeight) / elementHeight) * 50;

    // Update coords state
    setCoords({ x: clampedX, y: clampedY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return coords;
};

export default useMousePosition;
