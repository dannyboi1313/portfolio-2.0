import React, { useEffect, useRef, useState } from "react";

const MovingSquareCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasHeight, setCanvasHeight] = useState(500);

  const dotColor = "rgb(240,71,104)";
  let mouseX = 0;
  let mouseY = 0;
  let squareX = 0;
  let squareY = 0;
  const squareHeight = 550;
  const squareWidth = 650;

  const maxOffsetY = 40;
  const maxOffsetX = 40;
  const maxX = canvasWidth / 2 + maxOffsetX;
  const minX = canvasWidth / 2 - maxOffsetX;
  const maxY = canvasHeight / 2 + maxOffsetY;
  const minY = canvasHeight / 2 - maxOffsetY;
  const easingFactor = 0.1;

  const handleMouseMove = (event: MouseEvent) => {
    if (containerRef.current) {
      mouseX =
        event.clientX - containerRef.current.getBoundingClientRect().left;
      mouseY = event.clientY - containerRef.current.getBoundingClientRect().top;
    }
  };

  const animate = () => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const containerWidth = canvasRef.current.width;
    const containerHeight = canvasRef.current.height;

    let targetX;
    let targetY;
    if (mouseY < minY) {
      targetY = minY;
    } else if (mouseY > maxY) {
      targetY = maxY;
    } else {
      targetY = mouseY;
    }

    if (mouseX > maxX) {
      targetX = maxX;
    } else if (mouseX < minX) {
      targetX = minX;
    } else {
      targetX = mouseX;
    }
    //Magic Offset to center around cards
    targetY += 30;

    // Ease the square's position towards the mouse position
    const dx = targetX - squareX;
    const dy = targetY - squareY;
    squareX += dx * easingFactor;
    squareY += dy * easingFactor;

    ctx.clearRect(0, 0, containerWidth, containerHeight);
    // ctx.fillStyle = "blue";
    // ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // Draw dots in corners
    const dotRadius = 5;
    ctx.fillStyle = dotColor;

    // Top left corner
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.arc(
          squareX - squareWidth / 2 + j * 20,
          squareY - squareHeight / 2 + i * 20,
          dotRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
    // Top left corner
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        ctx.beginPath();
        ctx.arc(
          squareX - squareWidth / 2 + j * 20,
          squareY - squareHeight / 2 + i * 20,
          dotRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
    // Top right corner
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.arc(
          squareX + squareWidth / 2 - j * 20,
          squareY - squareHeight / 2 + i * 20,
          dotRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
    // Top right corner
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        ctx.beginPath();
        ctx.arc(
          squareX + squareWidth / 2 - j * 20,
          squareY - squareHeight / 2 + i * 20,
          dotRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    // Bottom right corner
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.arc(
          squareX + squareWidth / 2 - j * 20,
          squareY + squareHeight / 2 - i * 20,
          dotRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    // Bottom right corner
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        ctx.beginPath();
        ctx.arc(
          squareX + squareWidth / 2 - j * 20,
          squareY + squareHeight / 2 - i * 20,
          dotRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    // Bottom right corner
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.arc(
          squareX - squareWidth / 2 + j * 20,
          squareY + squareHeight / 2 - i * 20,
          dotRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    // Bottom right corner
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        ctx.beginPath();
        ctx.arc(
          squareX - squareWidth / 2 + j * 20,
          squareY + squareHeight / 2 - i * 20,
          dotRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    requestAnimationFrame(animate);
  };

  const handleWindowResize = () => {
    if (containerRef.current) {
      setCanvasHeight(containerRef.current.clientHeight);
      setCanvasWidth(containerRef.current.clientWidth);
      //setCanvasWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      setCanvasHeight(containerRef.current.clientHeight);
      setCanvasWidth(containerRef.current.clientWidth);

      //setCanvasWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        requestAnimationFrame(animate);
      }
    }

    const handleMouseEnter = () => {
      if (canvasRef.current) {
        canvasRef.current.addEventListener("mousemove", handleMouseMove);
      }
    };

    const handleMouseLeave = () => {
      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      mouseX = canvasRef.current!.width / 2;
      mouseY = canvasRef.current!.height / 2;
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        containerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, [canvasWidth]);

  return (
    <div ref={containerRef} className="canvas-wrapper">
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="project-canvas"
      />
    </div>
  );
};

export default MovingSquareCanvas;
