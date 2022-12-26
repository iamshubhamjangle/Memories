import React from "react";
import { useSelector } from "react-redux";

function Like({ likes }) {
  const { isLoggedIn } = useSelector((store) => store.user);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {isLoggedIn && (
        <div>
          {likes.includes(user.id) ? (
            <i className="fa-solid fa-heart fa-xl icon-red" />
          ) : (
            <i className="fa-regular fa-heart fa-xl icon-red" />
          )}
          {" " + likes?.length}
        </div>
      )}
      {!isLoggedIn && (
        <div>
          <i className="fa-regular fa-heart fa-xl icon-red" />
          {" " + likes?.length}
        </div>
      )}
    </>
  );
}

export default Like;
