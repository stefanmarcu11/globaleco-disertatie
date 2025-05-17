import React, { useState } from "react";
import "../pages/styleCss/login.css";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Add your login submission logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section */}
        <div className="login-left">
          <h1 className="login-title">Welcome Back!</h1>
          <p className="login-description">
            Log in to continue contributing to sustainability and making a difference.
          </p>
          <div className="login-illustration">
            <img
              src="src/assets/images/registration-page.png"
              alt="Illustration"
              className="illustration-image"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="login-right">
          {/* Login Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="form-title">Log In</h1>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="form-button">
              Log In
            </button>
            <p className="form-footer">
              Don't have an account? <a href="/registration">Create one</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
