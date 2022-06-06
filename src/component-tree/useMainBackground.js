import { setAppBackground } from "../actions/actions";
import useGetAppContext from "../shared-hooks/useGetAppContext";
import { getRandomColor } from "../utils/utility";

const useMainBackground = () => {
  const { state, dispatch } = useGetAppContext();

  const onChangeBackground = () => {
    const randomColor = getRandomColor();
    dispatch(setAppBackground(randomColor));
  };
  return { onChangeBackground };
};

export default useMainBackground;
