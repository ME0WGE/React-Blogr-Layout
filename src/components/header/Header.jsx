import "./header.css";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Global Container -- Nav & Header -- */}
      <div className="header-container">
        {/* Navbar Container -- Nav -- */}
        <div className="navbar-content">
          <NavLink to="/">
            <img src={logo} alt="company logo linking to the homepage" />
          </NavLink>

          <ul>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/company">Company</NavLink>
            </li>
            <li>
              <NavLink to="/connect">Connect</NavLink>
            </li>
          </ul>

          <div className="login">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>

        {/* Header Container -- Header -- */}
        <div className="header-content">
          <h1>A Modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="btn-container">
            <button>Start for Free</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
