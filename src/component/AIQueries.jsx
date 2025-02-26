import { aiFeatures } from "@/data/aIFeatures";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ResultPage from "./ResultPage";
const AIQueries = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  let { id, aiType, subAiType } = useParams();
  const key = localStorage.getItem("accessToken");
  const [showPage, setRestPage] = useState(false);
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [AiResponse, setAIResponse] = useState(null);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [queryNo, setQueryNo] = useState(0);
  const [queryNoArray, setqueryNoArray] = useState([]);
  const [formData, setFormData] = useState(
    aiType === "sleep-check"
      ? {
          gender: "",
          occupation: "",
          sleepDuration: "",
          qualityOfSleep: "",
          physicalActivity: "",
          bmiCategory: "",
          heartRate: "",
          dailySteps: "",
          systolicBP: "",
          age: "",
          diastolicBP: "",
          type: "sleep",
        }
      : subAiType === "stress-check"
      ? {
          gender: "",
          occupation: "",
          sleepDuration: "",
          qualityOfSleep: "",
          physicalActivity: "",
          bmiCategory: "",
          heartRate: "",
          dailySteps: "",
          systolicBP: "",
          age: "",
          diastolicBP: "",
          type: "stress",
        }
      : subAiType === "calorie-level"
      ? {
          calories: "",
          cal_fat: "",
          total_fat: "",
          sat_fat: "",
          trans_fat: "",
          cholesterol: "",
          sodium: "",
          total_carb: "",
          fiber: "",
          sugar: "",
          protein: "",
          type: "calorieLevel",
        }
      : subAiType === "nutri-scan"
      ? {
          calories: "",
          cal_fat: "",
          total_fat: "",
          sat_fat: "",
          trans_fat: "",
          cholesterol: "",
          sodium: "",
          total_carb: "",
          fiber: "",
          sugar: "",
          protein: "",
          type: "healthStatus",
        }
      : subAiType === "diabetes"
      ? {
          pregnancies: "",
          glucose: "",
          bloodPressure: "",
          skinThickness: "",
          insulin: "",
          bmi: "",
          diabetesPedigreeFunction: "",
          age: "",
        }
      : {
          age: "",
          height: "",
          weight: "",
          pregStage: "",
          active: "",
        }
  );

  let IDS = {
    queryId: id,
    keyId: id,
  };

  const handleQuery = () => {
    IDS.queryId = id;
    IDS.keyId = id;
    if (IDS.queryId === IDS.keyId) {
      IDS.keyId = parseInt(IDS.keyId) + 1;
      return IDS;
    } else {
      null;
    }
  };
  const handleTypeQuery = () => {
    if (aiType === "neuro-rest") {
      return (aiType = "Neurorest");
    } else if (aiType === "nutri-score") {
      return (aiType = "Nutriscore");
    } else if (aiType === "gluco-sense") {
      return (aiType = "Glucosense");
    } else if (aiType === "bump-balance") {
      return (aiType = "BumpBalance");
    }
  };

  const handleSubTypeQuery = () => {
    if (subAiType === "sleep-check") {
      return (subAiType = "sleepCheck");
    } else if (subAiType === "stress-check") {
      return (subAiType = "stressCheck");
    } else if (subAiType === "calorie-level") {
      return (subAiType = "calorieLevel");
    } else if (subAiType === "nutri-scan") {
      return (subAiType = "nutriScan");
    } else if (subAiType === "diabetes") {
      return (subAiType = "diabetes");
    } else {
      return (subAiType = "bumpBalance");
    }
  };

  aiType = handleTypeQuery();
  subAiType = handleSubTypeQuery();

  handleTypeQuery();
  IDS = handleQuery();

  const Query = aiFeatures[aiType].features[subAiType].queries;

  useEffect(() => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100; // Convert cm to meters
      const bmi = weight / Math.pow(heightInMeters, 2);
      let bmiCategory;
      const calculatedBmiCategory = Math.floor(bmi * 10) / 10;
      const weight1 = 18.5;
      const weight2 = 24.9;
      const weight3 = 25.0;
      const weight4 = 29.9;
      console.log(calculatedBmiCategory);
      if (calculatedBmiCategory < weight1) {
        bmiCategory = "Under Weight";
      } else if (
        calculatedBmiCategory >= weight1 &&
        calculatedBmiCategory <= weight2
      ) {
        bmiCategory = "Normal weight";
      } else if (
        calculatedBmiCategory >= weight3 &&
        calculatedBmiCategory <= weight4
      ) {
        bmiCategory = "Over Weight";
      } else {
        bmiCategory = "Obesity";
      }

      setFormData((prev) => ({
        ...prev,
        bmiCategory: bmiCategory,
      }));
    }
  }, [weight, height]);

  const handleInput = (e) => {
    //do i create regex variable here in the function
    // i want regex to handle the input of the user and make sure it doesn't allow the users to give stupid input
    //i want to check for things like negative numbers, symbols, string where the should be string, nuumber were there should be number
    //avoid space in some input
    // const regex=

    const { name, value } = e.target;

    // Validate weight if it's the weight field
    if (name === "weight") {
      // Set custom validity if the weight is below 30
      if (
        parseFloat(value) < e.target.min ||
        parseFloat(value) > e.target.max
      ) {
        inputRef.current.setCustomValidity(
          `Weight must be between ${e.target.min}kg and ${e.target.max}kg.`
        );
      } else {
        inputRef.current.setCustomValidity(""); // Reset validity if valid
      }

      // Update the weight state
      setWeight(value);
    } else if (name === "height") {
      if (
        parseFloat(value) < e.target.min ||
        parseFloat(value) > e.target.max
      ) {
        inputRef.current.setCustomValidity(
          `Height must be between ${e.target.min}cm and ${e.target.max}cm.`
        );
      } else {
        inputRef.current.setCustomValidity(""); // Reset validity if valid
      }
      // Update the height state if the field is height
      setHeight(value);
    }

    // Update the form data state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Manually trigger reportValidity() to show the validation message
    inputRef.current.reportValidity();
  };

  const addClick = () => {
    setQueryNo((prev) => prev + 1);
  };
  const subClick = () => {
    setQueryNo((prev) => prev - 1);
  };
  useEffect(() => {
    setqueryNoArray((prev) => [...prev, queryNo]);
  }, []);
  console.log(queryNoArray);
  const handleButtonClick = (e) => {
    e.preventDefault();
    addClick();
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleLeftClick = () => {
    queryNo > 0 && subClick();
  };

  const handleSubmitClick = (e) => {
    e.preventDefault(); // Prevents form submission

    let written = inputRef.current.value.trim(); // Get input value
    // i am putting regex somewhere here
    const convertedString = parseFloat(inputRef.current.value);
    console.log(typeof convertedString);

    if (!written) {
      inputRef.current.reportValidity(); //reportValidity gets the website to check for the input validity
      return;
    }
    if (
      inputRef.current.reportValidity() === true ||
      typeof convertedString === Number
    ) {
      inputRef.current.value = ""; // Clear the field
      queryNo < Query.length - 1 ? addClick() : queryNo;
      console.log(queryNo);
    }

    console.log("clicked");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Always prevent default form submission

    // Optional: Add a check for valid formData if needed
    setLoading(true);
    console.log(formData);

    try {
      console.log(key);
      const response = await axios.post(
        aiType === "Neurorest"
          ? `${baseURL}/api/v1/prediction/predict_sleep_stress`
          : aiType === "Nutriscore"
          ? `${baseURL}/api/v1/prediction/predict_calorie_health`
          : aiType === "Glucosense"
          ? `${baseURL}/api/v1/prediction/predict_diabetes`
          : `${baseURL}/api/v1/prediction/recommended_diet`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json", // Fixed typo: "Json" → "json"
          },
        }
      );
      console.log(response.data);
      setAIResponse(response.data.data);
      if (response) {
        setRestPage(true);
      }
      console.log(response.data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log(formData);
  console.log(queryNo);

  return (
    <div className="h-[100svh]  flex flex-col  md:items-center sm:justify-between pb-12 sm:pb-0">
      {!showPage ? (
        <>
          <div className="w-[100%] sm:shadow-md text-black font-bold flex justify-between items-center px-4 md:px-8 ">
            <div className="">
              <Link to="/">
                <h1 className="text-[.8rem] md:text-[1.2rem] cursor-pointer">
                  {subAiType.toUpperCase()}
                </h1>
              </Link>
            </div>
            <div className="my-[1rem] mx-[1rem]">
              <p className="text-[1rem] text-center select-none">
                {1 + queryNo} / {Query.length}
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center"></div>

          <div className="mb-5 flex flex-col sm:shadow-2xl overflow-hidden  md:w-[550px] sm:rounded-xl  justify-between">
            <div className="bg-slate-200 w-[100%] h-[7px] sm:rounded-md flex ">
              <div className="bg-slate-200 w-[100%] h-[7px] rounded-md flex">
                <div
                  className="h-[7px] bg-orange-500 md:rounded-xl"
                  style={{ width: `${(queryNo / Query.length) * 110}%` }}
                ></div>
              </div>
            </div>
            <div className="my-[2rem]  flex items-center justify-between h-[90vh]  md:h-[70svh] flex-col  ">
              {Query[queryNo].type === "option" ? (
                <div className="px-[2rem] sm:px-[.5rem] pb-[.5rem] flex flex-col">
                  <form>
                    <p className="font-m800 text-[2rem] mt-[5rem] text-center">
                      {Query[queryNo].question}
                    </p>
                    <div className="mt-[1rem] flex flex-col gap-[20px]">
                      <button
                        value={Query[queryNo].options[0]}
                        onClick={handleButtonClick}
                        className="text-white bg-orange-500  focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none hover:bg-black"
                      >
                        {Query[queryNo].options[0]}
                      </button>
                      <button
                        value={Query[queryNo].options[1]}
                        onClick={handleButtonClick}
                        className="text-white  bg-orange-500 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none hover:bg-black"
                      >
                        {Query[queryNo].options[1]}
                      </button>
                    </div>
                  </form>
                </div>
              ) : Query[queryNo].type === "select" ? (
                <div className="mt-[1rem] pb-[.5rem] flex flex-col ">
                  <form onSubmit={handleSubmit}>
                    <p className="font-m800 text-[2rem] text-center mt-[5rem] px-10">
                      {Query[queryNo].question}
                    </p>
                    <div className="mt-[2rem] flex flex-col gap-[8px] justify-center  px-[4rem] ">
                      <label className="custom-select">
                        <select
                          name={Query[queryNo].name}
                          ref={inputRef}
                          className="text-black bg-slate-100 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none hover:bg-slate-200 text-center"
                          onClick={handleInput}
                          required
                        >
                          {Query[queryNo].options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                      {queryNo === Query.length - 1 ? (
                        <div className="flex justify-around items-center gap-8">
                          <div
                            onClick={() => handleLeftClick()}
                            className="placeholder:text-black border-[2px] border-slate-100 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] mt-[2rem] text-center hover:opacity-75 w-[50%] cursor-pointer"
                          >
                            Back
                          </div>

                          <button className="placeholder:text-black bg-orange-500 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none mt-[2rem] text-center flex justify-center items-center text-p cursor-pointer w-[50%] hover:bg-black text-white">
                            {loading ? (
                              <ThreeCircles
                                visible={true}
                                height="30"
                                width="30"
                                color="#ffff"
                                ariaLabel="three-circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                              />
                            ) : (
                              "Submit"
                            )}
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-around items-center gap-8">
                          <div
                            onClick={() => handleLeftClick()}
                            className="placeholder:text-black border-[2px] border-slate-100 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] mt-[2rem] text-center hover:opacity-75 w-[50%] cursor-pointer"
                          >
                            Back
                          </div>
                          <button
                            onClick={handleSubmitClick}
                            className="placeholder:text-black text-white focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none mt-[2rem] text-center hover:bg-black w-[50%] bg-orange-500"
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              ) : (
                <div className="px-[2rem] md:px-[.5rem] flex flex-col w-[25rem] ">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col text-center "
                  >
                    <p className="font-m800 text-[2.0rem] mt-[5rem] ">
                      {Query[queryNo].question}
                    </p>
                    <div className="mt-[1rem] flex flex-col gap-[20px] items-center justify-center">
                      <div className="flex relative">
                        <input
                          type={Query[queryNo].dataType}
                          onChange={handleInput}
                          name={Query[queryNo].name}
                          ref={inputRef}
                          max={Query[queryNo].max}
                          min={Query[queryNo].min}
                          className="text-black border-[2px] border-slate-300 active:border-[1px] focus:border-slate-500  py-[1rem] px-[2rem] rounded-md text-[1.5rem] w-[100%] relative"
                          autoFocus
                          required
                        />
                        <div className="absolute right-[2rem] top-1/2 transform -translate-y-1/2 text-slate-500">
                          {Query[queryNo].unit}
                        </div>
                      </div>
                    </div>

                    {queryNo === Query.length - 1 ? (
                      <div className="flex justify-around items-center gap-8">
                        <div
                          onClick={() => handleLeftClick()}
                          className="placeholder:text-black border-[2px] border-slate-100 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] mt-[2rem] text-center hover:opacity-75 w-[50%] cursor-pointer"
                        >
                          Back
                        </div>

                        <button className="placeholder:text-black bg-orange-500 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none mt-[2rem] text-center flex justify-center items-center text-p cursor-pointer w-[50%] hover:bg-black text-white">
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
                            "Submit"
                          )}
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-around items-center gap-8">
                        <div
                          onClick={() => handleLeftClick()}
                          className="placeholder:text-black border-[2px] border-slate-100 focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] mt-[2rem] text-center hover:opacity-75 w-[50%] cursor-pointer"
                        >
                          Back
                        </div>
                        <button
                          onClick={handleSubmitClick}
                          className="placeholder:text-black text-white focus:border-[1px] py-[1rem] px-[2rem] rounded-2xl text-[1.5rem] shadow-md focus:shadow-none mt-[2rem] text-center hover:bg-black w-[50%] bg-orange-500"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              )}

              <p className=" text-[.8rem] text-slate-500 w-[390px] text-center px-6">
                Accurate input ensures optimal result and recommendations with
                HealthMania.
              </p>
            </div>
          </div>
        </>
      ) : (
        <ResultPage AiResponse={AiResponse} subAiType={subAiType} />
      )}
    </div>
  );
};
export default AIQueries;
