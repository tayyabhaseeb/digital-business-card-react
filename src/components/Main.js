import React from "react";

export default function Main() {
  return (
    <div>
      <div className="main-section-one">
        <h3>Lauran Smith</h3>
        <p className="frontend-text">Frontend Developer</p>
        <p className="website">laurasmith.website</p>
      </div>
      <div className="main-section-two">
        <button>
          <i class="fa-solid fa-envelope"></i>Email
        </button>
        <button className="blueBtn">
          <i class="fa-brands fa-linkedin blueBtn"></i>LinkedIn
        </button>
      </div>
      <div className="main-section-three">
        <h5>About</h5>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h5>Interests</h5>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
