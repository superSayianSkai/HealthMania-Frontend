import { useState } from "react";
import axios from "axios";
const GetPasswordOTP = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const baseURL = import.meta.env.VITE_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }


    try {
      const response = await axios.post(
        `${baseURL}/api/v1/auth/get-reset-password-otp`,
        email
      );
      setSuccess(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    }
    // Here you would typically call an API to send the OTP
    // For this example, we'll just simulate a successful OTP send
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Get OTP
          </h2>
          <p className="mt-2 text-sm text-orange-500">
            Enter your email to receive a one-time password
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Send OTP
            </button>
          </div>
        </form>
        {error && (
          <div
            className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">Something went wrong.Try again</span>
          </div>
        )}
        {success && (
          <div
            className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">
              OTP sent successfully! Please check your email.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default GetPasswordOTP;
