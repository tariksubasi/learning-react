import React from "react";

const Profile = ({ children }) => {
  return (
    <div className="border p-3">
      <h3>Profile</h3>
      {children}
    </div>
  );
};

export default Profile;
