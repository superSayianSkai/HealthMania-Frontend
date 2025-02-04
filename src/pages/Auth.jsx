import medicine from "../assets/img/Medicine.svg";
import google from "../assets/img/google.png";
import medicalMan from "../assets/img/medical man.svg";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/AuthProvider";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const Auth = () => {
  const location = useLocation();
  const prevLocation = location.state?.from.pathname || "/";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login, signUp, stillLoggedIn } = useContext(AuthContext);
  const [password, setPassword] = useState(false);

  const [isSignInActive, setIsSignInActive] = useState(true);
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    age: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { name: "fullName", label: "Full Name" },
    { name: "email", label: "Email" },
    { name: "gender", label: "Gender" },
    { name: "age", label: "Age" },
    { name: "password", label: "Password" },
  ]; // Removed confirmPassword step

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        // Start loading before making the request
        setLoading(true);
        // Make sure you await the signUp function
        await signUp(
          signUpData.email,
          signUpData.password,
          signUpData.fullName,
          signUpData.gender,
          signUpData.age
        );

        // After sign up is successful, you can do any follow-up, such as redirecting the user.
      } catch (error) {
        console.error("Error during sign-up:", error);
        // Optionally, set loading to false here in case of error
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (stillLoggedIn) {
      navigate(prevLocation, { replace: true });
    } else {
      console.error("Login successful but stillLoggedIn is false.");
    }
  }, [stillLoggedIn]);

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(loading);
      await login(signInData.email, signInData.password);
    } catch (error) {
      console.error("Login failed:", error);
    }
    setLoading(false);
  };

  const handlePassword = () => {
    setPassword((prev) => !prev);
  };

  const renderInput = (step) => {
    const { name } = step;
    switch (name) {
      case "gender":
        return (
          <select
            name={name}
            value={signUpData[name]}
            onChange={handleSignUpChange}
            className="text-[.8rem] outline-none border-[1px] border-gray-200 rounded-md p-2 w-full"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        );
      case "age":
        return (
          <select
            name={name}
            value={signUpData[name]}
            onChange={handleSignUpChange}
            className="text-[.8rem] outline-none border-[1px] border-gray-200 rounded-md p-2 w-full"
          >
            <option value="">Select age</option>
            {[...Array(83)].map((_, i) => (
              <option key={i} value={i + 18}>
                {i + 18}
              </option>
            ))}
          </select>
        );
      case "password":
        return (
          <div className="relative">
            <input
              type={password ? "text" : "password"}
              name={name}
              value={signUpData[name]}
              onChange={handleSignUpChange}
              className="text-[.8rem] outline-none border-[1px] border-gray-200 rounded-md p-2 w-full "
              required
            />
            <p className="text-[.6rem] mt-3 italic">
              Password must be 8-15 characters long and contain at least one
              lowercase letter, one uppercase letter, one number and one special
              character!
            </p>
            {password ? (
              <i
                onClick={handlePassword}
                className="bi bi-eye-slash absolute right-1 top-6 transform -translate-y-1/2 z-[60] bg-white cursor-pointer w-[40px] text-[1rem]"
              ></i>
            ) : (
              <i
                onClick={handlePassword}
                className="bi bi-eye absolute right-1 top-6 transform -translate-y-1/2 z-[60] bg-white cursor-pointer w-[40px] text-[1rem]"
              ></i>
            )}
          </div>
        );

      default:
        return (
          <input
            required
            type="text"
            name={name}
            value={signUpData[name]}
            onChange={handleSignUpChange}
            className="text-[.8rem] outline-none border-[1px] border-gray-200 rounded-md p-2 w-full"
          />
        );
    }
  };

  return (
    <div className="h-[100svh] flex justify-center items-center overflow-hidden relative">
      {/* Forms Container */}
      <div
        className="forms-wrapper absolute left-0 top-0 w-[200%] h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${isSignInActive ? 0 : -50}%)` }}
      >
        {/* Sign In Form */}
        <div className=" w-[50%] h-full flex items-center justify-center px-8 md:px-20 bg-white">
          <form
            className="w-full flex flex-col gap-10  md:items-start"
            onSubmit={(e) =>
              handleSignInSubmit(e, signInData.email, signInData.password)
            }
          >
            <h2 className="text-[2rem]">Sign In</h2>
            <div className="flex flex-col gap-4 md:w-[35%]">
              <label className="text-[.8rem] font-bold flex flex-col gap-2">
                Email
                <input
                  name="email"
                  value={signInData.email}
                  onChange={handleSignInChange}
                  className="text-[.8rem] outline-none border-[1px] border-gray-200 rounded-md p-2 focus:bg-white"
                />
              </label>

              <label className="text-[.8rem] font-bold flex flex-col gap-2 relative overflow-hidden">
                Password
                <input
                  type={password ? "password" : "text"}
                  name="password"
                  value={signInData.password}
                  onChange={handleSignInChange}
                  className="text-[.8rem] outline-none border-[1px] border-gray-200 rounded-md p-2 z-[30] focus:bg-white"
                />
                {password ? (
                  <i
                    onClick={handlePassword}
                    className="bi bi-eye-slash absolute right-1 -bottom-2 transform -translate-y-1/2 z-[60] bg-white cursor-pointer w-[40px] text-[1rem]"
                  ></i>
                ) : (
                  <i
                    onClick={handlePassword}
                    className="bi bi-eye absolute right-1 -bottom-2 transform -translate-y-1/2 z-[60] bg-white cursor-pointer w-[40px] text-[1rem]"
                  ></i>
                )}
              </label>
              <Link to="/getPasswordOTP" className="w-[50%]">
                <p className="text-[.7rem] hover:underline cursor-pointer ">
                  Forgot password?{" "}
                </p>
              </Link>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="mt-3 hover:bg-black bg-orange-500 text-white p-3 rounded-md text-[.9rem] w-[100%] flex items-center justify-center "
                >
                  {loading ? (
                    <ThreeCircles
                      visible={true}
                      height="30"
                      width="30"
                      color="#fff"
                      ariaLabel="three-circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    "Sign In"
                  )}
                </button>

                <div className="text-[.8rem] text-center">OR</div>
                <button className="border-[1px] border-gray-500 p-3 rounded-md text-[.8rem] flex justify-center items-center gap-2 font-bold hover:bg-gray-100">
                  <img src={google} className="w-[15px] h-[auto]" />
                  Sign In with google
                </button>
              </div>
            </div>
            <p className="text-[.8rem] font-bold">
              Don&apos;t have an account?{" "}
              <span
                className="text-orange-500 cursor-pointer hover:text-black"
                onClick={() => setIsSignInActive(false)}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className="w-[50%] md:w-[40%] px-6 md:p-12 flex bg-white">
          <form
            className="w-[100%] md:w-[50%] justify-center flex flex-col gap-4 m-2 bg-white"
            onSubmit={handleSignUpSubmit}
          >
            <h2 className="text-[2rem]">Sign Up</h2>

            {/* Progress bar */}
            <div className=" bg-white rounded-full h-2.5 ">
              <div
                className="bg-orange-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Step indicator */}
            <p className="text-[.8rem] text-gray-500">
              Step {currentStep + 1} of {steps.length}
            </p>

            <div className="flex flex-col gap-4">
              <label className="text-[.8rem] font-bold flex flex-col gap-2">
                {steps[currentStep].label}
                {renderInput(steps[currentStep])}
              </label>

              <div className="flex justify-between mt-4">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 text-black  px-5 py-2 rounded-md text-[.9rem] mt-3"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="mt-3 hover:bg-black bg-orange-500 text-white px-5 py-2 rounded-md text-[.9rem] ml-auto"
                >
                  {currentStep === steps.length - 1 ? (
                    loading ? (
                      <ThreeCircles
                        visible={true}
                        height="30"
                        width="30"
                        color="#fff"
                        ariaLabel="three-circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      "Sign Up"
                    )
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </div>

            <div className="text-[.8rem] text-center">OR</div>
            <button className="border-[1px] border-gray-500 p-3 rounded-md text-[.8rem] flex justify-center items-center gap-2 font-bold hover:bg-gray-100">
              <img
                src={google || "/placeholder.svg"}
                alt="Google"
                className="w-[15px] h-[auto]"
              />
              Sign up with google
            </button>

            <p className="text-[.8rem] font-bold mt-8">
              Already have an account?{" "}
              <span
                className="text-orange-500 cursor-pointer hover:text-black"
                onClick={() => setIsSignInActive(true)}
              >
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Toggle Content */}
      <div className="toggle-container absolute right-0 w-[50%] h-full overflow-hidden z-[1000] hidden md:block">
        <div className="relative bg-black h-full">
          <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              isSignInActive ? "translate-x-[-100%]" : "translate-x-0"
            }`}
          >
            <div className="relative h-full p-5 ">
              <h1 className="text-white font-bold text-[1.8rem] text-end">
                HEALTH MANIA
              </h1>
              <img
                src={medicine}
                className="absolute top-[20%] left-[50%] transform translate-x-[-50%] w-[130%] "
              />
            </div>
          </div>

          <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              isSignInActive ? "translate-x-0" : "translate-x-[100%]"
            }`}
          >
            <div className="relative h-full p-5">
              <h1 className="text-white font-bold text-[1.8rem] text-end">
                HEALTH MANIA
              </h1>
              <img
                src={medicalMan}
                className="absolute top-[20%] right-[-10%] w-[130%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
