import React from "react";

const LoadingButton = ({ minWidth }) => {
  return (
    <button
      className="btn btn-primary"
      style={{
        paddingLeft: minWidth || "20px",
        paddingRight: minWidth || "20px",
      }}
      disabled
    >
      <div
        className="spinner-border"
        role="status"
        style={{ maxWidth: "20px", maxHeight: "20px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </button>
  );
};

export default LoadingButton;
