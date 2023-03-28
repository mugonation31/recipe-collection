import React from "react";
import "./Hero.scss";

export default function Hero({ name, heading }) {
  return (
    <>
      <section className="hero">
        <h1>{name}</h1>
        <p>{heading}</p>
      </section>
    </>
  );
}
