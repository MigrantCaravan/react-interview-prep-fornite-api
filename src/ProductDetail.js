import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [item, setItem] = useState({
    images: {},
  });
  const { id } = useParams();
  console.log("match", id);
  useEffect(() => {
    fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data.data))
      .then(console.log("specific item", item))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>{item?.item?.name}</h1>
      <p>{item?.item?.description}</p>
      <img src={item?.item?.images?.background} alt="img" />
    </div>
  );
}
