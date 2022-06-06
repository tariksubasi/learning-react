import React, { useState } from "react";
import { setAppBackground } from "../actions/actions";
import useGetAppContext from "../shared-hooks/useGetAppContext";
import { getRandomColor } from "../utils/utility";

const Main = () => {
  const { state, dispatch } = useGetAppContext();

  const onChangeBackground = () => {
    const randomColor = getRandomColor();
    dispatch(setAppBackground(randomColor));
  };

  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });

  const onUserChange = (e) => {
    setUserInfo((state) => {
      return { ...state, name: e.target.value };
    });
  };

  const onPassChange = (e) => {
    setUserInfo((state) => {
      return { ...state, password: e.target.value };
    });
  };

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
