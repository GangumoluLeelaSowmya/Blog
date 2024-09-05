import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/App_Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHome, faSignOutAlt, faUser, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // Import additional icons
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isAuthenticated, logOut } = useContext(AppContext);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="nav p-2" style={{ 
      fontFamily: "'Outfit', sans-serif", // Ensure the font is applied to the entire Navbar
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start', 
      backgroundColor: "#28a745", // Green background color
      color: "white", // Text color
    }}>
      
      {/* Heading and Subtitle */}
      <div className="text-left" style={{ width: '100%', marginBottom: '20px' }}>
        <h1 style={{ 
          margin: '20px 0 0 20px', // Top and left margins
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: "white" // White text color for heading
        }}>
          Click 'n Bloom
        </h1>
        <h2 style={{ 
          margin: '10px 0 0 20px', // Top margin and left margin
          fontSize: '1.2rem', 
          color: "white" // White text color for subtitle
        }}>
          Share Your Garden's Story
        </h2>
      </div>

      {/* Buttons Section */}
      <div className="d-flex justify-content-end align-items-center mt-4" style={{ width: '100%' }}>
        {isAuthenticated && (
          <div className="d-flex align-items-center" style={{ marginRight: '10px' }}>
            <Link
              to="/"
              className="d-flex align-items-center mx-2"
              style={{
                textDecoration: "none",
                color: "white", // White text color
                fontWeight: "bold",
                fontSize: "1.2rem",
                fontFamily: "'Outfit', sans-serif" // Ensure font is applied to each link
              }}
            >
              <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px' }} /> {/* Home Icon with space */}
              Home
            </Link>

            <Link
              to="/add"
              className="d-flex align-items-center mx-2"
              style={{
                textDecoration: "none",
                color: "white", // White text color
                fontWeight: "bold",
                fontSize: "1.2rem",
                fontFamily: "'Outfit', sans-serif" // Ensure font is applied to each link
              }}
            >
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} /> {/* Plus Icon with space */}
              Create
            </Link>
            
            <Link
              to="/profile"
              className="d-flex align-items-center mx-2"
              style={{
                textDecoration: "none",
                color: "white", // White text color
                fontWeight: "bold",
                fontSize: "1.2rem",
                fontFamily: "'Outfit', sans-serif" // Ensure font is applied to each link
              }}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} /> {/* Profile Icon with space */}
              Profile
            </Link>
            
            <div
              className="d-flex align-items-center mx-2"
              onClick={logOut}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "white", // White text color
                fontWeight: "bold",
                fontSize: "1.2rem",
                fontFamily: "'Outfit', sans-serif" // Ensure font is applied
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '8px' }} /> {/* Quit Icon with space */}
              LogOut
            </div>
          </div>
        )}

        {!isAuthenticated && (
          <div className="d-flex align-items-center" style={{ marginRight: '10px' }}>
            <Link
              to="/login"
              className="mx-2"
              style={{
                textDecoration: "none",
                color: "white", // White text color
                fontWeight: "bold",
                fontSize: "1.2rem",
                fontFamily: "'Outfit', sans-serif" // Ensure font is applied
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="mx-2"
              style={{
                textDecoration: "none",
                color: "white", // White text color
                fontWeight: "bold",
                fontSize: "1.2rem",
                fontFamily: "'Outfit', sans-serif" // Ensure font is applied
              }}
            >
              Register
            </Link>
          </div>
        )}

        {/* Theme Toggle Button */}
        <div
          className="d-flex align-items-center mx-2"
          onClick={toggleTheme}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "white", // White text color
            fontWeight: "bold",
            fontSize: "1.2rem",
            fontFamily: "'Outfit', sans-serif" // Ensure font is applied
          }}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} style={{ marginRight: '8px' }} /> {/* Toggle Icon */}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
