import React from "react";
import useMainBackground from "./useMainBackground";
import useUserInfo from "./useUserInfo";

const Main = () => {
  const { onChangeBackground } = useMainBackground();

  const { onUserChange, onPassChange, userInfo } = useUserInfo();

  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <h3> Main</h3>
      <button className="mt-2 btn btn-primary" onClick={onChangeBackground}>
        Set Random Background Color
      </button>
      <label className="mt-2">UserName</label>
      <input
        onChange={onUserChange}
        value={userInfo.name}
        type="text"
        className="mt-1 form-control"
        style={{ width: "250px" }}
      />
      <label>password</label>
      <input
        value={userInfo.password}
        type="password"
        className="mt-1 form-control"
        style={{ width: "250px" }}
        onChange={onPassChange}
      />
    </div>
  );
};

export default Main;
