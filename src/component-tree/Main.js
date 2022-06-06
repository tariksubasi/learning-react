import React from "react";
import { addRandomProduct } from "../actions/actions";
import usePassFirstMount from "../shared-hooks/usePassFirstMount";
import { products } from "../utils/utility";
import useMainBackground from "./useMainBackground";
import useUserFocus from "./useUserFocus";
import useUserInfo from "./useUserInfo";

const Main = () => {
  const { onChangeBackground, dispatch } = useMainBackground();

  const { onUserChange, onPassChange, userInfo } = useUserInfo();

  const { userRef } = useUserFocus();

  const addProduct = () => {
    const randomIndex = Math.ceil(Math.random() * 2);
    const randomProduct = products[randomIndex];
    dispatch(addRandomProduct(randomProduct));
  };

  usePassFirstMount(addProduct, [userInfo.name]);

  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <h3> Main</h3>
      <button className="mt-2 btn btn-primary" onClick={onChangeBackground}>
        Set Random Background Color
      </button>
      <label className="mt-2">UserName</label>
      <input
        ref={userRef}
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
