import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div onClick={() => logout({ returnTo: window.location.origin })}>
      <FontAwesomeIcon icon={faUserTie} />
    </div>
  );
};

export default LogoutButton;
