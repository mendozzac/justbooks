import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return <i onClick={() => loginWithPopup()}></i>;
};

export default LoginButton;
