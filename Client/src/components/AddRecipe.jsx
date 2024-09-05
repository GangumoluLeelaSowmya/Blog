import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import './AddRecipe.css'; // Import the custom CSS file

const AddRecipe = () => {
  const navigate = useNavigate();
  const { addRecipe, user } = useContext(AppContext); // Assuming user contains name

  const [formData, setFormData] = useState({
    title: "",
    ist: "",
    ing1: "",
    ing2: "",
    ing3: "",
    ing4: "",
    qty1: "",
    qty2: "",
    qty3: "",
    qty4: "",
    imgurl: "",
  });

  // Set the default value of title to user.name when component mounts
  useEffect(() => {
    if (user && user.name) {
      setFormData(prevState => ({
        ...prevState,
        title: user.name
      }));
    }
  }, [user]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          imgurl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const {
      title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgurl,
    } = formData;

    try {
      const result = await addRecipe(
        title,
        ist,
        ing1,
        ing2,
        ing3,
        ing4,
        qty1,
        qty2,
        qty3,
        qty4,
        imgurl
      );

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
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.error("Failed to add recipe", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          border: "2px solid #9de176",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Add POST</h2>
        <form
          onSubmit={onSubmitHandler}
          style={{
            width: "400px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              <b>UserName</b>
            </label>
            <input
              value={formData.title}
              onChange={onChangeHandler}
              name="title"
              type="text"
              className="form-control no-border"
              id="title"
              aria-describedby="titleHelp"
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ing1" className="form-label">
              Title
            </label>
            <input
              value={formData.ing1}
              onChange={onChangeHandler}
              name="ing1"
              type="text"
              className="form-control large-input"
              id="ing1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ist" className="form-label">
              Share Your Thoughts
            </label>
            <textarea
              value={formData.ist}
              onChange={onChangeHandler}
              name="ist"
              className="form-control wide-input"
              id="ist"
              rows="4" // Adjust the number of rows to control the height
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imgurl" className="form-label">
              Upload Image
            </label>
            <input
              type="file"
              className="form-control"
              id="imgurl"
              accept="image/*"
              onChange={onFileChange}
            />
            {/* Display the uploaded image preview */}
            {formData.imgurl && (
              <div className="mt-3">
                <img
                  src={formData.imgurl}
                  alt="Preview"
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>
            )}
          </div>

          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">
              POST
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;