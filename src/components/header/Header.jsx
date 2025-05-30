import "./header.css";
import logo from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <>
      {/* Global Container -- Nav & Header -- */}
      <div className="header-container">
        {/* Navbar Container -- Nav -- */}
        <div className="navbar-container">
          <img src={logo} alt="" />
        </div>
        {/* Header Container -- Header -- */}
        <div className="header-container">
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
