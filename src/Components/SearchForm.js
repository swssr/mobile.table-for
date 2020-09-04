import React, { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSearch}>
      <div className="input-wrapper">
        <input
          onChange={(ev) => setQuery(ev.target.value)}
          type="text"
          placeholder="Search restaurant, cuisine, or location"
        />
        <button type="submit">
          <span className="icon icon--search"></span>
        </button>
      </div>
    </form>
  );
}
