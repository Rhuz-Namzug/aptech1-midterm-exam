import { Link } from "react-router-dom";
import "../NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Registration</h2>

      <div className="nav-links">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
          <li><Link to="/Success">Success</Link></li>
          <li><Link to="/Profile/sampleuser">Profile</Link></li>
          </ul>
      </div>

    </nav>
  );
}

export default Navbar;