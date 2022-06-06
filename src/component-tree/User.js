import React from "react";
import Card from "../components/Card";
import useHeader from "./useHeader";
import useUserEvents from "./useUserEvents";

const User = () => {
  const { header, onChange } = useHeader();
  const { onChangeBackground, onAddRandomProduct, onClick } = useUserEvents();

  const cardProps = {
    imageURL:
      "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png",
    title: "User",
    description:
      "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen",
    actionName: "Go Details",
    actionEvent: onClick,
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
      <button className="mt-2 btn btn-success" onClick={onAddRandomProduct}>
        Add Random Product
      </button>
    </>
  );
};

export default User;
