import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  const { name, and, year } = props;
  return (
    <>
      <footer>
        <p>
          {name} {and} {year}
        </p>
      </footer>
    </>
  );
}
