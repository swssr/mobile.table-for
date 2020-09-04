import React from "react";
import RandomImage from "./RandomImage";

export default function RestaurantCard({
  name,
  address,
  opens,
  closes,
  isSaved,
}) {
  return (
    <figure className="card">
      <RandomImage />
      <button>{isSaved && <span className="icon icon--saved"></span>}</button>
      <figcaption>
        <div>
          <h3>{name}</h3>
          <span className="rating">
            <span className="num-reviews">
              {Math.ceil(2 + Math.random() * 100).toFixed(1)}
            </span>
            <span className="score">{Math.round(Math.random() * 5)}</span>
            <i class="fas fa-star"></i>
          </span>
        </div>
        <div>
          <p className="location">{address}</p>
        </div>
      </figcaption>
    </figure>
  );
}
