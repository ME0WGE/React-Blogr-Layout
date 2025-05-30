import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Blogr logo" />
          </Link>
        </div>

        {/* Product Links */}
        <div className="footer-links">
          <h4>Product</h4>
          <ul>
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/integrations">Integrations</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Connect Links */}
        <div className="footer-links">
          <h4>Connect</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/linkedin">LinkedIn</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
