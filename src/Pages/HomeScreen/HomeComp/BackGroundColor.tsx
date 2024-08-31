import React from "react";
import { colors } from "../../Utils";

const BackGroundColor = ({ backgroundColor, setBackGroundColor }: any) => {
  return (
    <div className="swatch customily-swatch" style={{
      width: "55%"
    }}>
      {colors.map((item: any, index: any) => (
        <label
          onClick={() => setBackGroundColor(item.color)}
          key={index}
          htmlFor="black"
          className="needsclick needsfocus"
          style={{
            marginBottom: "5px",
            backgroundColor: item.color,
            width: 40,
            height: 40,
            display: "inline-block",
            border: backgroundColor !== item.color ? "2px solid #DEDEDE" : "2px solid black"
          }}
        />
      ))}
    </div>
  );
};

export default BackGroundColor;
