import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-z]{2,}$/;
  const usernameRegex = /^[A-Za-z0-9._-]+$/;
  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let newErrors = {};

    if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First name must be letters only and at least 2 characters.";
    }

    if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last name must be letters only and at least 2 characters.";
    }

    if (!usernameRegex.test(formData.username)) {
      newErrors.username = "Username must contain only letters, numbers, ., _, -";
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be 8-16 characters with AT LEAST 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form is valid:", formData);
      navigate("/success");
    } else {
      console.log("Validation errors");
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <p>{errors.firstName}</p>

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <p>{errors.lastName}</p>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <p>{errors.username}</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
