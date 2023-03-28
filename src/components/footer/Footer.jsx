import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  const { name, year } = props;
  return (
    <>
      <footer>
        <p>
          {name} &copy; {year}
        </p>
      </footer>
    </>
  );
}
