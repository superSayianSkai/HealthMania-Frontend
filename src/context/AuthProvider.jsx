import { createContext, useEffect, useState, useRef } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [key, setKey] = useState();

  const [loading, setLoading] = useState(false);

  const [stillLoggedIn, setStillLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );
  // const isTokenExpired = (token) => {
  //   try {
  //     const payload = JSON.parse(atob(token).split(".")[1]);
  //     const result = Date.now() >= payload.exp * 1000;
  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //     return true;
  //   }
  // };
  console.log(stillLoggedIn);

  useEffect(() => {
    if (stillLoggedIn) {
      console.log("Token has not expired");
    } else {
      console.log("token has expired");
    }
  });
  //this is me getting a new key
  const login = async (email, password) => {
    setLoading(true);
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
      console.error(error);
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
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const LogOut = () => {
    console.log("Successful");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("accessToken");
    setStillLoggedIn(false); // Manually update state to trigger re-render
  };

  return (
    <AuthContext.Provider
      value={{ stillLoggedIn, loading, key, login, signUp, LogOut, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
