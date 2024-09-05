import React, { useContext } from 'react';
import { AppContext } from '../context/App_Context';

const Profile = () => {
  const { user, userRecipe } = useContext(AppContext);

  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome, {user.name}</h1>
      </div>

      <div className="container">
        <div className="text-center mx-auto" style={{ width: "100%" }}>
          <div className="row d-flex flex-column align-items-center">
            {userRecipe?.map((data) => (
              <div key={data._id} className="my-3" style={{ width: "100%", maxWidth: "30rem" }}>
                <div 
                  className="card mx-auto" 
                  style={{ 
                    width: "100%", 
                    height: "auto", 
                    borderRadius: "0", // Sharp corners for the card
                    backgroundColor: "#ffffff", // White background color for the card
                    color: "black", // Text color
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)" // Subtle shadow effect
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center p-3">
                    <img
                      src={data.imgurl}
                      className="card-img-top"
                      alt={data.title}
                      style={{
                        width: "100%", // Expand image width
                        height: "auto", // Maintain aspect ratio
                        borderRadius: "10px", // Rounded corners for the image
                        border: "2px solid #9de176" // Image border
                      }}
                    />
                  </div>
                  <div className="card-body" style={{ textAlign: "left" }}> {/* Align text to the left */}
                    <h5 className="card-title" style={{ marginBottom: "0.5rem" }}>
                      {data.ing1}
                    </h5>
                    <p className="card-text">
                      {data.ist}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
