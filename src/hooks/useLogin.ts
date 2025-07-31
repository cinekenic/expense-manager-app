/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AuthRequest } from "../model/AuthRequest";
import { authenticate } from "../services/auth-service";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const { updateAuth } = useAuthContext();

  const login = (authRequest: AuthRequest) => {
    setLoader(true);
    authenticate(authRequest)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        updateAuth(true);
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError(error.message);
        }
      })
      .finally(() => setLoader(false));
  };

  return { error, isLoading, login };
};

// function useAuthContext(): { updateAuth: any } {
//   throw new Error("Function not implemented.");
// }
