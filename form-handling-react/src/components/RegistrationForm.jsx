import { useState } from "react";

const RegistrationForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State for error messages (plural)
  const [errors, setErrors] = useState({});

  // Destructure values
  const { username, email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Explicit checks
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    // Update state with errors
    setErrors(newErrors);

    // If there are any errors, stop here
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Simulate API call
    console.log("User Registered:", formData);

    alert(`User Registered Successfully!\n\n${JSON.stringify(formData, null, 2)}`);

    // Clear form and errors
    setFormData({ username: "", email: "", password: "" });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>User Registration (Controlled Components)</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
