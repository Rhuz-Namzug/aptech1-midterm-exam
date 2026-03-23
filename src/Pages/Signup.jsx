import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Signup.css";

function Signup() {
  const navigate = useNavigate();

  const nameRegex = /^[A-Za-z]{2,}$/;
  const usernameRegex = /^[A-Za-z0-9._-]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange" 
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    navigate(`/Profile/${data.username}`);
  };

  return (
    <div className="signup-container">
      <h2>Signup Form (React Hook Form)</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName", {
            required: "First name is required",
            pattern: {
              value: nameRegex,
              message: "At least 2 letters only"
            }
          })}
          className={errors.firstName ? "input-error" : ""}
        />
        <p className="error-text">{errors.firstName?.message}</p>

        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName", {
            required: "Last name is required",
            pattern: {
              value: nameRegex,
              message: "At least 2 letters only"
            }
          })}
          className={errors.lastName ? "input-error" : ""}
        />
        <p className="error-text">{errors.lastName?.message}</p>

        <input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
            pattern: {
              value: usernameRegex,
              message: "Invalid username"
            }
          })}
          className={errors.username ? "input-error" : ""}
        />
        <p className="error-text">{errors.username?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: passwordRegex,
              message:
                "8-16 characters with AT LEAST 1 uppercase, 1 lowercase, 1 number, and 1 special character"
            }
          })}
          className={errors.password ? "input-error" : ""}
        />
        <p className="error-text">{errors.password?.message}</p>

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Invalid email"
            }
          })}
          className={errors.email ? "input-error" : ""}
        />
        <p className="error-text">{errors.email?.message}</p>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
