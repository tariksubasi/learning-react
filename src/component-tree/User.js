import React, { useState, useContext } from "react";
import Card from "../components/Card";
import { getRandomColor } from "../utils/utility";
import { AppStateContext } from "../App";
import { setAppBackground } from "../actions/actions";

const User = () => {
  const onClick = () => {
    alert("Go Details");
  };

  const cardProps = {
    imageURL:
      "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png",
    title: "User",
    description:
      "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen",
    actionName: "Go Details",
    actionEvent: onClick,
  };

  //const { imageURL, title, description, actionName, actionEvent } = cardProps;

  const [header, setHeader] = useState("");

  const onChange = (e) => {
    setHeader(e.target.value);
  };

  console.log("user rendered");

  const { state, dispatch } = useContext(AppStateContext);

  const onChangeBackground = () => {
    const randomColor = getRandomColor();
    dispatch(setAppBackground(randomColor));
  };

  return (
    <>
      {header && (
        <p style={{ minWidth: "100px", minHeight: "20px" }} className="border">
          {header}
        </p>
      )}
      <input
        className="form-control"
        style={{
          maxWidth: "250px",
        }}
        type="text"
        onChange={onChange}
      />
      <Card {...cardProps} />
      <button className="mt-2 btn btn-primary" onClick={onChangeBackground}>
        Set Random Background Color
      </button>
    </>
  );
};

export default User;
