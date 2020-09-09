import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function RestaurantDetails() {
  const location = useLocation();
  return (
    <div className="page page--details">
      <h1>Restaurant</h1>
      <p>Open Now</p>
      <p>
        Call <strong>079 644 1784</strong> <br />
        Email <strong>restaurant@mail.com</strong>
      </p>
      <Link
        to={{ pathname: "/booking", state: { ...location.state } }}
        className="btn btn--primary"
      >
        Book a table
      </Link>
      <br />
      <br />    
      <details>
        <summary>Menu</summary>
        <ul>
          <li>
            <h4>Fancy meal 1</h4>
            <p>fancy description</p>
          </li>
          <li>
            <h4>Fancy meal 2</h4>
            <p>fancy description</p>
          </li>
          <li>
            <h4>Fancy meal 3</h4>
            <p>fancy description</p>
          </li>
          <li>
            <h4>Fancy meal 4</h4>
            <p>fancy description</p>
          </li>
          <li>
            <h4>Fancy meal 5</h4>
            <p>fancy description</p>
          </li>
        </ul>
      </details>
    </div>
  );
}
