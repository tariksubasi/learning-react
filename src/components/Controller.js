import React, { useContext } from "react";
import { AppStateContext } from "../App";

const Controller = () => {
  const { state, dispatch } = useContext(AppStateContext);
  const { controllerBackground, appName } = state;

  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
        backgroundColor: controllerBackground,
      }}
      className="p-2 border shadow-sm d-flex justify-content-center align-items-center flex-column"
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {appName}
      </h2>
      <input
        style={{
          maxWidth: "250px",
        }}
        className="form-control"
        type="text"
        //onChange={onChange}
      />
    </div>
  );
};

export default Controller;
