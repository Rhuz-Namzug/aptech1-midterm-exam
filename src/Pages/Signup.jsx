import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  // Event Handling: onChange
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };

  // Event Handling: onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    navigate("/success");
  };

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        /><br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => handleChange(e)} // inline arrow function
        /><br />

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
