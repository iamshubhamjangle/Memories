import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <img src="https://img.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg?w=480"></img>
      <h3 className="my-5">404 Page Not Found!</h3>
      <button onClick={() => navigate("/")} className="btn btn-secondary">
        Go to home page
      </button>
    </div>
  );
}

export default NotFound;
