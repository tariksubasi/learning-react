import React from "react";
import Card from "../components/Card";

const Search = () => {
  const products = [
    {
      imageURL:
        "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",

      title: "The Quantified Cactus: An Easy Plant Soil Moisture Sensor",
      description: "This project...",
      actionName: "Product-1",
    },
    {
      imageURL:
        "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
      title: "A beautiful switch-on book light",
      description: "Use craft ...",
      actionName: "Product-2",
    },
    {
      imageURL:
        "https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png",

      title: "Bling your Laptop with an Internet-Connected Light Show",
      description: "Create a web-co...",
      actionName: "Product-3",
    },
  ];

  return (
    <div
    
      className=" d-flex justify-content-center align-items-center flex-column"
    >
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
