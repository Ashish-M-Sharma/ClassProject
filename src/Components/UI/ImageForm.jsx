// ImageForm.jsx
import React from "react";
import "../../Css/ImageForm.css"; // Separate CSS for ImageForm

const ImageForm = ({ isVisible, onClose, imageUrl }) => {
  if (!isVisible) return null;

  return (
    <div className="image-modal-overlay">
      <div className="image-form-container">
        <button className="image-close-btn" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <img src={imageUrl} alt="Popup" className="popup-image" />
      </div>
    </div>
  );
};

export default ImageForm;
