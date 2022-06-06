import { useRef, useEffect } from "react";

const usePassFirstMount = (func, deps) => {
  const render = useRef(false);

  useEffect(() => {
    if (render.current) {
      func();
    } else {
      render.current = true;
    }
  }, deps);
};

export default usePassFirstMount;
