import React from "react";

const Profile = ({ children }) => {
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <h3>Profile</h3>
      {children}
    </div>
  );
};

export default Profile;
