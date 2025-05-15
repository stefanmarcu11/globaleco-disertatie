import React, { useEffect, useState } from "react";
import logo from "/src/assets/images/GlobalEco-logo.png";
import RecyclingForm from "./components/recyclingForm";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Collection Points", href: "/collectionPoints" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showForm, setShowForm] = useState(false); // State to toggle the form modal

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 10); // Show logo after scrolling 10px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    setShowForm(true); // Show the form modal
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form modal
  };

  return (
    <>
      <nav
        style={{
          width: "100%",
          height: "90px",
          background: "#d1d6d0",
          padding: "0.5rem 0",
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          top: 0,
          left: 0,
          zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        {/* Logo on the left */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "24px",
            opacity: showLogo ? 1: 0
          }}
        >
          <img
            src={logo}
            alt="GLOBALECO"
            style={{ height: 80 }}
          />
        </div>

        {/* Centered Menu Items */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "2rem",
            }}
          >
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    color: "#000",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "#199112aa")
                  }
                  onMouseOut={(e) => (e.currentTarget.style.color = "#000")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Started Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "24px",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#199112aa",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Form Modal */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <RecyclingForm onClose={handleCloseForm}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
