import React from "react";

export default function Card({ name, picture }) {
  console.log(name);
  console.log(picture);
  return (
    <div>
      {name}
      <img src={picture.url} alt={name} width={200} height={200} />
    </div>
  );
}
