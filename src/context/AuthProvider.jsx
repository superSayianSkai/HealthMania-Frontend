import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getStoredLoginState = () => {
    try {
      return JSON.parse(localStorage.getItem("loggedIn")) || false;
    } catch (error) {
      console.error("LocalStorage access error:", error);
      return false;
    }
  };

  const [stillLoggedIn, setStillLoggedIn] = useState(getStoredLoginState);

  console.log(stillLoggedIn);

  useEffect(() => {
    if (stillLoggedIn) {
      console.log("Token has not expired");
    } else {
      console.log("token has expired");
    }
  }, []);
  //this is me getting a new key
  const login = async (email, password) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post(`${baseURL}/api/v1/auth/signin`, {
        email,
        password,
      });

      console.log(response);
      const isLoggedIn = response.data.success;
      if (isLoggedIn) {
        localStorage.setItem("loggedIn", isLoggedIn);
        localStorage.setItem("accessToken", response.data.data);
        setStillLoggedIn(true);
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email, password, fullName, gender, age) => {
    const data = {
      email,
      password,
      fullName,
      gender,
      age: String(age), // Ensure age is passed as a string
    };
    setError(false);

    console.log("Sending data:", data); // Add logging to see the data you're sending
    try {
      setLoading(false);
      console.log(loading);
      const response = await axios.post(
        `${baseURL}/api/v1/auth/signup`,
        data, // Pass the object directly, Axios will stringify the data for you
        {
          headers: {
            "Content-Type": "application/json", // Correct content type
          },
        }
      );

      // Handle the response (Success)
      console.log("Signup successful:", response.data);
      const isLoggedIn = response.data.success;
      if (isLoggedIn) {
        localStorage.setItem("loggedIn", isLoggedIn);
        localStorage.setItem("accessToken", response.data.data);
        setStillLoggedIn(true);
      }
      // You can redirect the user or handle the next steps after successful signup
    } catch (error) {
      setLoading(false);
      // Handle errors (Error)

      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error response data:", error.response.data);
      }
      if (
        error.response.data.message ===
        "Password must be 8-15 characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character!"
      ) {
        console.log("hey ");
        setError(true);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const LogOut = () => {
    console.log("Successful");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profilePicture");
    setStillLoggedIn(false); // Manually update state to trigger re-render
  };

  const googleAuth = (e) => {
    e.preventDefault();
    console.log("hey");
    window.location.href = `${baseURL}/api/v1/auth/signin-with-google`; // Opens the link in the browser
  };

  return (
    <AuthContext.Provider
      value={{
        stillLoggedIn,
        loading,
        login,
        signUp,
        LogOut,
        setLoading,
        error,
        errorMessage,
        googleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
