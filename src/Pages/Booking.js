import React, { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Booking() {
  const location = useLocation();

  console.log({ location });
  const [restaurant, setRestaurant] = useState({});

  const [state, dispatch] = useReducer(reducer, {
    date: new Date(),
    seats: 0,
    specialNote: null,
  });
  return (
    <div>
      <h1>Book your table</h1>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.rating}</p>

      <div className="counter">
        <button
          onClick={(_) => dispatch({ type: "REMOVE_PERSON" })}
          className="btn btn--icon"
        >
          -
        </button>
        <input
          type="number"
          name="seats"
          id="seats"
          value={state.seats}
          onChange={(e) =>
            dispatch({ type: "SET_PERSONS", payload: +e.target.value })
          }
        />
        <button
          onClick={(_) => dispatch({ type: "ADD_PERSON" })}
          className="btn btn--icon"
        >
          +
        </button>
      </div>

      <div className="table">
        <ul class="circle-container">
          <li className="seat"></li>
          <li className="seat"></li>
          <li className="seat"></li>
          <li className="seat"></li>
          <li className="seat"></li>
          <li className="seat"></li>
          <li className="seat"></li>
          <li className="seat"></li>
        </ul>
      </div>
    </div>
  );
}
const MAX_SEATS = 8;
const MIN_SEATS = 0;

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PERSON":
      if (state.seats + 1 > MAX_SEATS) return state;
      return { ...state, seats: state.seats + 1 };
    case "REMOVE_PERSON":
      if (state.seats - 1 < MIN_SEATS) return state;
      return { ...state, seats: state.seats - 1 };
    case "SET_PERSONS":
      if (state.seats - 1 < MIN_SEATS || state.seats + 1 > MAX_SEATS)
        return state;
      return { ...state, seats: +action.payload };
    case "SET_SPECIAL_NOTE":
      return { ...state, specialNote: action.payload };
    default:
      throw new Error();
  }
}
