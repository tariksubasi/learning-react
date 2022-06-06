import React, { useState } from "react";

const useHeader = () => {
  const [header, setHeader] = useState("");

  const onChange = (e) => {
    setHeader(e.target.value);
  };
  return { header, onChange };
};

export default useHeader;
