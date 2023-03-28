import React from "react";
import "./Nav.scss";

export default function Nav(props) {
  const { title1, title2 } = props;
  return (
    <nav className="nav">
      <a href="#">{title1}</a>
      <a href="#">{title2}</a>
    </nav>
  );
}
