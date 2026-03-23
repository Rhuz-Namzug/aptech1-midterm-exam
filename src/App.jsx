import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import Success from "./Pages/Success";
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile/:username" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;