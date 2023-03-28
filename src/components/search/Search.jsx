import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <>
      <section className="search">
        <input
          className="search__field"
          type="text"
          placeholder="Search for a recipe"
        />
        <button className="search__btn">Search</button>
      </section>
    </>
  );
}
