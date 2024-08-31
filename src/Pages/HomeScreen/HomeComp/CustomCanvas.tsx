import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Rect,
  Circle,
  Text,
} from "react-konva";

const ShapeSelector = ({
  currentBkgShape,
  backgroundColor,
  onShapeBounds,
}: any) => {
  const calculateShapeBounds: any = useCallback(() => {
    let shapeBounds: any = {};
    switch (currentBkgShape) {
      case "rect":
        shapeBounds = { x: 110, y: 75, width: 220, height: 120 };
        break;
      case "circle":
        shapeBounds = { x: 115, y: 60, width: 200, height: 200 };
        break;
      case "squr":
        shapeBounds = { x: 130, y: 75, width: 160, height: 160 };
        break;
      default:
        shapeBounds = { x: 115, y: 75, width: 160, height: 160 };
        break;
    }
    onShapeBounds(shapeBounds);
  }, [currentBkgShape, onShapeBounds]);

  useEffect(() => {
    calculateShapeBounds();
  }, [calculateShapeBounds]);

  return (
    <>
      {currentBkgShape === "rect" ? (
        <Rect
          x={110}
          y={75}
          width={220}
          height={120}
          fill={backgroundColor}
          shadowBlur={1}
          stroke={"white"}
        />
      ) : currentBkgShape === "circle" ? (
        <Circle
          x={215}
          y={160}
          stroke={"white"}
          radius={100}
          fill={backgroundColor}
          shadowBlur={1}
        />
      ) : currentBkgShape === "squr" ? (
        <Rect
          x={130}
          y={75}
          width={160}
          height={160}
          fill={backgroundColor}
          shadowBlur={1}
          stroke={"white"}
        />
      ) : (
        <Rect
          x={215}
          y={75}
          width={160}
          height={160}
          fill={backgroundColor}
          shadowBlur={1}
          stroke={"white"}
          rotation={45}
        />
      )}
    </>
  );
};

const CustomCanvas = ({
  image,
  currentBkgShape,
  backgroundColor,
  canvasText,
}: any) => {
  const [imgProps, setImgProps] = useState({ width: 0, height: 0 });
  const [shapeBounds, setShapeBounds]: any = useState(null);

  useEffect(() => {
    if (image) {
      const img = new window.Image();
      img.src = image.src;
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const canvasWidth = window.innerWidth * 0.3;
        const canvasHeight = window.innerHeight;

        let width, height;

        if (canvasWidth / aspectRatio <= canvasHeight) {
          width = canvasWidth;
          height = canvasWidth / aspectRatio;
        } else {
          height = canvasHeight;
          width = canvasHeight * aspectRatio;
        }

        setImgProps({ width, height });
      };
    }
  }, [image]);

  const handleShapeBounds = useCallback((bounds: any) => {
    setShapeBounds((prevBounds: any) => {
      if (
        prevBounds?.x !== bounds.x ||
        prevBounds?.y !== bounds.y ||
        prevBounds?.width !== bounds.width ||
        prevBounds?.height !== bounds.height
      ) {
        return bounds;
      }
      return prevBounds;
    });
  }, []);

  const calculateFontSize = (text: any, width: any, height: any) => {
    let fontSize = 19; // Start with a default font size
    const textNode = document.createElement("span");
    textNode.style.position = "absolute";
    textNode.style.whiteSpace = "pre";
    textNode.style.visibility = "hidden";
    textNode.style.fontSize = `${fontSize}px`;
    textNode.innerText = text;

    document.body.appendChild(textNode);

    while (
      (textNode.offsetWidth > width || textNode.offsetHeight > height) &&
      fontSize > 1
    ) {
      fontSize -= 1;
      textNode.style.fontSize = `${fontSize}px`;
    }

    document.body.removeChild(textNode);

    return fontSize;
  };

  const fontSize: any = useMemo(() => {
    if (!canvasText || !shapeBounds) return 20;

    const width = shapeBounds.width || shapeBounds.radius * 2;
    const height = shapeBounds.height || shapeBounds.radius * 2;
    const text = Array.isArray(canvasText) ? canvasText.join("\n") : canvasText;

    return calculateFontSize(text, width, height);
  }, [canvasText, shapeBounds]);

  return (
    <div>
      <Stage width={window.innerWidth * 0.3} height={window.innerHeight}>
        <Layer>
          {image && (
            <KonvaImage
              image={image}
              x={10}
              y={10}
              width={imgProps.width}
              height={imgProps.height}
            />
          )}
        </Layer>
        <Layer>
          <ShapeSelector
            backgroundColor={backgroundColor}
            currentBkgShape={currentBkgShape}
            onShapeBounds={handleShapeBounds}
          />
          {canvasText && shapeBounds && (
            <Text
              text={
                Array.isArray(canvasText) ? canvasText.join("\n") : canvasText
              }
              fontSize={fontSize}
              fill="black"
              x={
                shapeBounds.x +
                (shapeBounds.width || shapeBounds.radius * 2) / 2
              }
              y={
                shapeBounds.y +
                (shapeBounds.height || shapeBounds.radius * 2) / 2
              }
              offsetX={(shapeBounds.width || shapeBounds.radius * 2) / 2}
              offsetY={(shapeBounds.height || shapeBounds.radius * 2) / 2}
              width={shapeBounds.width || shapeBounds.radius * 2}
              align="center"
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default CustomCanvas;
