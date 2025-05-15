import React, { useState, ChangeEvent, FormEvent } from "react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Integrare cu backend sau serviciu de newsletter aici
    setSubmitted(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Stay informed with GLOBALECO!
      </h1>
      <p
        style={{
          fontSize: "1.3rem",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
      >
        Be the first to find out about news from the world of recycling, useful tips, and updates regarding collection points in your city.
      </p>
      <p
        style={{
          fontSize: "1.1rem",
          textAlign: "center",
          marginBottom: "2.5rem",
        }}
      >
        Subscribe to the GLOBALECO newsletter to receive directly by email information about recycling campaigns, 
        updates about collection centers, and ideas for a sustainable lifestyle.
      </p>
      {submitted ? (
        <div
          style={{
            background: "#c8e6c9",
            color: "#155724",
            padding: "1rem 2rem",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Thank you for subscribing!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <input
            type="email"
            placeholder="email address"
            value={email}
            onChange={handleChange}
            required
            style={{
              flex: 1,
              padding: "1rem",
              fontSize: "1.2rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              background: "#fff",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#199112aa",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Newsletter Subscription
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSection;