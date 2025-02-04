import stress from "../assets/img/Student stress-bro.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AiPage = () => {
  // const questionsAnswered = 0;
  const { aiType } = useParams();
  console.log(aiType);
  return (
    <div className="h-[100svh] overflow-hidden flex-col md:flex-row flex justify-between p-6 sm:p-8 md:p-2 md:m-2 md:mx-16 md:items-center  ">
      <div className=" flex flex-col justify-center md:w-[50%] gap-2 ">
        <div className="text-[2rem] sm:text-[3rem] md:text-[3rem] font-m800 sm:w-[350px]">
          Welcome to Stress Check!
        </div>
        <p className="mt-[12px] text-[.8rem]  sm:text-[.9rem] md:text-[1 rem] break-inside-auto ">
          Take control of your health. Answer a few questions to assess your
          risk of diabetes.
        </p>
        <Link to={`/ai-page/ai-query/${aiType}`}>
          <button className="mt-4 text-[1rem] p-4 rounded-md  w-[30%] bg-black text-white flex justify-center items-center cursor-pointer hover:opacity-70">
            BEGIN
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center ">
        <img className="w-[500px] md:w-[500px]" src={stress} />
      </div>
    </div>
  );
};

export default AiPage;
