import React, { useState, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import "./HomeScreen.css";
import CoverOption from "./HomeComp/CoverOption";

const HomeScreen = ({ curimage }: any) => {
  const [image, setImage] = useState(null);
  const [coverCurrentOption, setCoverCurrentOption] = useState("Phrase");

  useEffect(() => {
    const loadImage: any = new window.Image();
    loadImage.src = curimage;
    loadImage.onload = () => {
      setImage(loadImage);
    };
  }, [curimage]);

  return (
    <div className="mainContainer">
      <div>
        <Stage width={window.innerWidth * 0.35} height={window.innerHeight}>
          <Layer>{image && <KonvaImage image={image} x={10} y={10} />}</Layer>
        </Stage>
      </div>
      <div className="accordion-content">
        <CoverOption
          coverCurrentOption={coverCurrentOption}
          setCoverCurrentOption={setCoverCurrentOption}
        />
        <div className="controls">
          <div className="more-cust">
            <h4>Select background shape</h4>
            <div className="swatch-container">
              <div className="swatch customily-swatch">
                <input
                  id="rect1"
                  name="shapeSelect"
                  type="radio"
                  value="rectangular"
                  className="needsclick needsfocus"
                />
                <label htmlFor="rect1" className="needsclick needsfocus">
                  <img
                    src="https://cdn.customily.com/shopify/assetFiles/swatches/may-designs-main.myshopify.com/af1a5c75-f3c9-474f-bc9d-590d16cae0d0/10/55e6ac90-8ac2-4261-a67b-4e8fee0ba436.png"
                    loading="lazy"
                    width="40"
                    height="40"
                    alt="rect1"
                  />
                </label>
              </div>
              {/* Add similar swatch items for circle, square, etc. */}
            </div>
          </div>
          <div className="more-cust">
            <h4>Select font style</h4>
            <div className="swatch-container">
              {/* Repeatable Font Style Items */}
              <div className="swatch customily-swatch">
                <input
                  id="font1"
                  type="radio"
                  name="fontStyle"
                  className="needsclick needsfocus"
                />
                <label htmlFor="font1" className="needsclick needsfocus">
                  <img
                    src="https://cdn.customily.com/shopify/assetFiles/swatches/may-designs-main.myshopify.com/af1a5c75-f3c9-474f-bc9d-590d16cae0d0/2/15fb2438-ceed-4cef-85e0-5d05506f687e.png"
                    loading="lazy"
                    width="40"
                    height="40"
                    alt="font1"
                  />
                </label>
              </div>
              {/* Add similar font style items */}
            </div>
          </div>
          <div className="more-cust-1">
            <h4>Select background color</h4>
            <div className="swatch-container">
              <input type="hidden" id="backColor" value="#E7D9CD" />
              <div className="swatch customily-swatch">
                <input
                  id="black"
                  type="radio"
                  name="colorSelect"
                  value="black"
                  className="needsclick needsfocus"
                  // onClick={() => updateColor("#000000")}
                />
                <label
                  htmlFor="black"
                  className="needsclick needsfocus"
                  style={{
                    backgroundColor: "#000000",
                    width: 40,
                    height: 40,
                    display: "inline-block",
                  }}
                ></label>
              </div>
              {/* Add similar color selection items */}
            </div>
          </div>
          <div className="more-cust-2">
            <h4>Select text color</h4>
            <div className="swatch-container">
              <input type="hidden" id="textColor" value="#000000" />
              <div className="swatch customily-swatch">
                <input
                  // onClick={() => updateTextColor("#000000")}
                  id="tcblack"
                  type="radio"
                  name="textcolorSelect"
                  value="black"
                />
                <label
                  htmlFor="tcblack"
                  style={{
                    backgroundColor: "#000000",
                    width: 40,
                    height: 40,
                    display: "inline-block",
                  }}
                ></label>
              </div>
              {/* Add similar text color selection items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
