import React from "react";

const BackGroundColor = ({ backgroundColor, setBackGroundColor }: any) => {
  return (
    <div className="swatch customily-swatch">
      <label
        htmlFor="black"
        className="needsclick needsfocus"
        style={{
          backgroundColor: "#000000",
          width: 40,
          height: 40,
          display: "inline-block",
        }}
      />
    </div>
  );
};

export default BackGroundColor;
