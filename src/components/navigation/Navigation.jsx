import { Link } from "react-router-dom";
import "./Navigation.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div className="register">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
