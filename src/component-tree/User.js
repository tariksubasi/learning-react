import React, { useState } from "react";
import Card from "../components/Card";

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
    </>
  );
};

export default User;
