import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDownload } from "@fortawesome/free-solid-svg-icons"; // Import icons

const Home = () => {
  const { recipe, savedRecipeById } = useContext(AppContext);

  const saved = async (id) => {
    const result = await savedRecipeById(id);
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
  };

  const downloadImage = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'image.jpg'; // Force download as JPG
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error downloading the image:', error);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="text-center mx-auto" style={{ width: "100%", padding: "2rem" }}>
        <div className="d-flex flex-column align-items-center">
          {/* Left-aligned Heading with Margin */}
          <div className="text-left" style={{ width: '100%', marginBottom: '20px' }}>
            <h1 style={{ 
              margin: '0', 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: "white", // White text color for heading
              marginLeft: '1rem' // Added left margin
            }}>
              BLOGS
            </h1>
          </div>

          {recipe.map((data) => (
            <div key={data._id} className="my-3" style={{ width: "90vw", maxWidth: "40rem", margin: "auto", position: 'relative' }}>
              <div
                className="card mx-auto"
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  backgroundColor: "#ffffff",  // Changed background color to white
                  color: "black",  // Text color changed to black for better contrast
                  borderRadius: "0",  // Sharp corners for the card
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)" // Added shadow for a subtle effect
                }}
              >
                <FontAwesomeIcon
                  icon={faDownload}
                  onClick={() => downloadImage(data.imgurl)}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '1.5rem',
                    color: 'black', // Changed color to black
                    cursor: 'pointer'
                  }}
                />
                <div className="card-body d-flex align-items-center">
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px', color: "black" }} /> {/* Profile Icon */}
                  <h5
                    className="card-title"
                    style={{ color: "black", textAlign: "left", marginBottom: "0.5rem" }}
                  >
                    {data.title}
                  </h5>
                </div>
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imgurl}
                    className="card-img-top"
                    alt="Recipe"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "0",  // Sharp corners for the image
                      border: "2px solid #9de176",  // Image border
                    }}
                  />
                </div>
                <div className="card-body mt-2" style={{ 
                  padding: "1rem", 
                  backgroundColor: "#f8f9fa", // Changed background color to a light gray
                  textAlign: "left" // Align text to the left
                }}>
                  <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div className="left">
                      <h5>{data.ing1}</h5>
                      <div className="right" style={{ maxWidth: "100%" }}>
                        {data.ist}
                      </div>
                    </div>
                    {/* Add more details if needed */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
 