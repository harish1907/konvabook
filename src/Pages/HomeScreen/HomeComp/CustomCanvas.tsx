import React from "react";
import { Stage, Layer, Image as KonvaImage, Rect, Circle } from "react-konva";

const ShapeSelector = ({ currentBkgShape, backgroundColor }: any) => {
  return (
    <>
      {currentBkgShape === "rect" ? (
        <Rect
          x={132}
          y={75}
          width={220}
          height={120}
          fill={backgroundColor}
          shadowBlur={1}
          stroke={"white"}
        />
      ) : currentBkgShape === "circle" ? (
        <Circle
          x={245}
          y={160}
          stroke={"white"}
          radius={100}
          fill={backgroundColor}
          shadowBlur={1}
        />
      ) : currentBkgShape === "squr" ? (
        <Rect
          x={160}
          y={75}
          width={160}
          height={160}
          fill={backgroundColor}
          shadowBlur={1}
          stroke={"white"}
        />
      ) : (
        <Rect
          x={245}
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

const CustomCanvas = ({ image, currentBkgShape, backgroundColor }: any) => {
  return (
    <div>
      <Stage width={window.innerWidth * 0.35} height={window.innerHeight}>
        <Layer>{image && <KonvaImage image={image} x={10} y={10} />}</Layer>
        <Layer>
          <ShapeSelector
            backgroundColor={backgroundColor}
            currentBkgShape={currentBkgShape}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default CustomCanvas;
