import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
   const navigate = useNavigate();
   const { register } = useContext(AppContext);
   const [name, setname] = useState("");
   const [gmail, setgmail] = useState("");
   const [password, setpassword] = useState("");
   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
     setDarkMode(document.body.classList.contains('dark-mode'));
   }, []);

   const registerHandler = async (e) => {
     e.preventDefault();
     const result = await register(name, gmail, password);
     toast.success(result.data.message, {
       position: "top-right",
       autoClose: 1000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
       transition: Bounce,
     });
     
     if (result.data.message !== "User Already exist") {
       setTimeout(() => {
         navigate("/login");
       }, 1500);
     }
   };

  return (
    <>
      <ToastContainer />
      <div className={`container my-5 p-5 ${darkMode ? 'dark-mode' : ''}`} style={{ width: "500px", borderRadius: "10px" }}>
        <h2 className="text-center" style={{ color: "#9de176" }}>Register</h2>
        <form onSubmit={registerHandler} style={{ width: "420px", margin: "auto" }} className="my-3 p-3">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              type="text"
              className={`form-control ${darkMode ? 'dark-mode' : ''}`}
              id="nameInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              onChange={(e) => setgmail(e.target.value)}
              required
              type="email"
              className={`form-control ${darkMode ? 'dark-mode' : ''}`}
              id="emailInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              type="password"
              className={`form-control ${darkMode ? 'dark-mode' : ''}`}
              id="passwordInput"
            />
          </div>
          <div className="container d-grid col-6">
            <button
              type="submit"
              className={`btn ${darkMode ? 'dark-mode' : ''}`}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
