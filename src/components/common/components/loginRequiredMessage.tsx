import React from "react";

type LoginRequiredMessageProps = {
  onLogin: () => void;
  onSignUp: () => void;
};

const LoginRequiredMessage: React.FC<LoginRequiredMessageProps> = ({ onLogin, onSignUp }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "10px" }}>Login Required</h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>
        You must be logged in to submit a review. Please log in or create an account to share your feedback.
      </p>
      <div>
        <button
          onClick={onLogin}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Log In
        </button>
        <button
          onClick={onSignUp}
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginRequiredMessage;
