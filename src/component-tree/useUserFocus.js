import { useEffect, useRef } from "react";

const useUserFocus = () => {
  useEffect(() => {
    console.log("useEffect will run every render...");
  });

  useEffect(() => {
    console.log("useEffect will only run in first render.");

    userRef.current.focus();
  }, []);

  let count = 0;
  count++;

  const counter = useRef(0);
  counter.current++;

  const userRef = useRef();
  return {
    userRef,
  };
};

export default useUserFocus;
