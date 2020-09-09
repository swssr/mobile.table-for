import React from "react";
import { Picsum as Pic } from "picsum-photos";

function RandomImage({ imgOptions, ...props }) {
  return (
    <img
      src={Pic.url({ cache: true, ...imgOptions })}
      alt="Random images"
      {...props}
    />
  );
}

export default RandomImage;
