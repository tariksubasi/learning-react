import React from "react";
import Card from "../components/Card";

const User = () => {

  console.log("user rendered");

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

  return <Card {...cardProps} />;
};

export default User;
