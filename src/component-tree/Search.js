import React, { useContext } from "react";
import { AppStateContext } from "../App";
import Card from "../components/Card";

const Search = () => {
  const { state } = useContext(AppStateContext);
  const { products } = state;
  console.log("search rendered");
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <h3> Search</h3>
      {products.map((product) => {
        return (
          <Card {...product} actionEvent={() => alert(product.actionName)} />
        );
      })}
    </div>
  );
};

export default Search;
