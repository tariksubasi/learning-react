import { setAppBackground, addRandomProduct } from "../actions/actions";
import useGetAppContext from "../shared-hooks/useGetAppContext";
import { getRandomColor, products } from "../utils/utility";

const useUserEvents = () => {
  const { state, dispatch } = useGetAppContext();

  const onChangeBackground = () => {
    const randomColor = getRandomColor();
    dispatch(setAppBackground(randomColor));
  };

  const onAddRandomProduct = () => {
    const randomIndex = Math.ceil(Math.random() * 2);
    const randomProduct = products[randomIndex];
    dispatch(addRandomProduct(randomProduct));
  };

  const onClick = () => {
    alert("Go Details");
  };

  return {
    onChangeBackground,
    onAddRandomProduct,
    onClick,
  };
};

export default useUserEvents;
