import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const LoginButton = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div onClick={() => loginWithPopup()}>
        <FontAwesomeIcon icon={faUser} />
      </div>
    )
  );
};

export default LoginButton;
