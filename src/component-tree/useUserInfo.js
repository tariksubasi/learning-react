import { useState } from "react";

const useUserInfo = () => {
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
  return { onUserChange, onPassChange, userInfo };
};

export default useUserInfo;
