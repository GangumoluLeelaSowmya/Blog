import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [gmail, setgmail] = useState("");
  const [password, setpassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(document.body.classList.contains('dark-mode'));
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await login(gmail, password);
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
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <div className={`container my-5 p-5 ${darkMode ? 'dark-mode' : ''}`} style={{ width: "500px", borderRadius: "10px" }}>
        <h2 className="text-center" style={{ color: "#9de176" }}>Login</h2>
        <form onSubmit={loginHandler} style={{ width: "420px", margin: "auto" }} className="my-3 p-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              onChange={(e) => setgmail(e.target.value)}
              type="email"
              className={`form-control ${darkMode ? 'dark-mode' : ''}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              className={`form-control ${darkMode ? 'dark-mode' : ''}`}
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="container d-grid col-6">
            <button
              type="submit"
              className={`btn ${darkMode ? 'dark-mode' : ''}`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
