import React from "react";
import "./Header.css";
import Form from "./Form";
export default function Header() {
  return (
    <div>
      <nav>
        <div className="dis">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <div className="img">
            <img src="download.png" />
          </div>
        </div>
      </nav>
      <Form />
    </div>
  );
}
