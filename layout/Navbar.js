import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div id="navbar" className="nav-wrapper">
            <img
              id="logo"
              className="brand-logo"
              src="/assets/img/logo.png"
              height="50"
              width="50"
              alt=""
            />
            <ul id="left-navbar-list" className=" hide-on-med-and-down">
              <li className="left-navbar-button">
                <a href="/">Lessons</a>
              </li>
              <li className="left-navbar-button">
                <a href="/">My List</a>
              </li>
            </ul>

            <ul id="right-navbar-list" className="right hide-on-med-and-down">
              <li>
                <a href="">
                  <img
                    className="social-media-icons"
                    src="icon_facebook.png"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.mjssa.in/">
                  <img
                    className="social-media-icons"
                    src="logo.png"
                    alt="MJSSA"
                  />
                </a>
              </li>
              <li>
                <a href="/sign_up">Sign up</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
