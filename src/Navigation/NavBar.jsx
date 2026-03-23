import { Link } from "react-router-dom";
import "../NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Student Registration</h2>

      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Success">Success</Link>
        <Link to="/Profile">Profile</Link>
      </div>

    </nav>
  );
}

export default Navbar;