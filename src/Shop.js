import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fortnite-api.theapinetwork.com/upcoming/get`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .then(console.log(products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={product.itemId}>
            <Link to={`/shop/${product.itemId}`}>
              <h1>{product.item.name}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
