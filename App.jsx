import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        email,
        password,
      });
      console.log(res.data);
      alert("User registered successfully");
    } catch (error) {
      console.error(error.response.data);
      alert("Registration failed");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(res.data);
      // Store token in localStorage
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (error) {
      console.error(error.response.data);
      alert("Login failed");
    }
  };

  return (
    <div>
      <div id="bg"></div>
      <form >
      <h1>Event Management App</h1>
        <div class="form-field">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div class="form-field">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />{" "}
        </div>

        <div class="form-field">
          <button onClick={handleRegister} class="btn">
            Register
          </button>
          <button onClick={handleLogin} class="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
