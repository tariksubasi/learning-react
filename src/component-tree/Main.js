import React, { useContext } from "react";
import { AppStateContext } from "../App";
import { getRandomColor } from "../utils/utility";

const Main = () => {
  const { setBackground } = useContext(AppStateContext);

  const onChangeBackground = () => {
    const randomColor = getRandomColor();
    setBackground(randomColor);
  };

  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <h3> Main</h3>
      <button className="mt-2 btn btn-primary" onClick={onChangeBackground}>
        Set Random Background Color
      </button>
    </div>
  );
};

export default Main;
