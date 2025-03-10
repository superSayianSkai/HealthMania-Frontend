import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { auth, googleprovider } from "@/firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [normalAuth, setNormalAuth] = useState(false);

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
      setNormalAuth(true);
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
      setNormalAuth(true);
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

  const googleAuth = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const result = await signInWithPopup(auth, googleprovider);
      const user = result.user;
      const idToken = await result.user.getIdToken();

      const requestBody = {
        email: user.email,
        fullName: user.displayName,
        accessToken: idToken,
      };

      const response = await axios.post(
        `${baseURL}/api/v1/auth/signin-with-google`,
        requestBody, // Send accessToken in body
        { headers: { "Content-Type": "application/json" } }
      );

      const isLoggedIn = response.data.success;
      if (isLoggedIn) {
        localStorage.setItem("loggedIn", isLoggedIn);
        localStorage.setItem("accessToken", response.data.data);
        setStillLoggedIn(true);
      }
      setLoading(true);
    } catch (error) {
      setNormalAuth(false);
      let errorMSG = error.response.data.message;
      if (errorMSG === "signin!") {
        errorMSG =
          "This email was not registered with Google Sign-In. Please sign in using your email and password instead.";

        setErrorMessage(errorMSG);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // const getOTP = async (e) => {

  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       `${baseURL}/ /api/v1/auth/get-reset-password-otp`
  //     );
  //     console.log(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
        normalAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
