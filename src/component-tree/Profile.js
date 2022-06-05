import React from "react";
import User from "./User";

const Profile = () => {
  console.log("profile rendered");
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <h3>Profile</h3>
      <User />
    </div>
  );
};

export default Profile;
