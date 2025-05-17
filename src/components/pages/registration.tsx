import React, { useState } from "react";
import "../pages/styleCss/registration.css";

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] = useState(0); // Strength level (0-3)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;

    // Check password length
    if (password.length >= 8) strength++;

    // Check for numbers
    if (/\d/.test(password)) strength++;

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    setPasswordStrength(strength);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        {/* Left Section */}
        <div className="registration-left">
          <h1 className="registration-title">Welcome!</h1>
          <p className="registration-description">
            Join us to contribute to sustainability and make a difference.
          </p>
          <div className="registration-illustration">
            <img
              src="src/assets/images/registration-page.png"
              alt="Illustration"
              className="illustration-image"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="registration-right">
          {/* Get Started Section */}
          <div className="get-started">
            <h1 className="get-started-title">Get Started</h1>
            <p className="get-started-subtitle">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>

          {/* Registration Form */}
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-input"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-input"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
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
                type="tel"
                name="phone"
                placeholder="Phone"
                className="form-input"
                value={formData.phone}
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
              <div className="password-strength">
                <span className={`strength-bar ${passwordStrength >= 1 ? "active" : ""}`}></span>
                <span className={`strength-bar ${passwordStrength >= 2 ? "active" : ""}`}></span>
                <span className={`strength-bar ${passwordStrength >= 3 ? "active" : ""}`}></span>
              </div>
              <p className="password-hint">Password strength</p>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit" className="form-button-primary">
              Create account
            </button>
            <button type="button" className="form-button-secondary">
              Sign in
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
