import doc from "../assets/img/doc.png";
// import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AiPage = () => {
  // const questionsAnswered = 0;
  const { AIType } = useParams();
  return (
    <div className="h-[100svh] py-[40px] overflow-hidden">
      <div>
        <div className=" text-center flex flex-col justify-center items-center">
          <div className="text-[40px] font-m800">Hi there!</div>
          <p className="mt-[12px] text-[20px] break-inside-auto w-[300px]">
            Let&apos;s assess your{" "}
            <span className="text-orange-500"> health</span> with just a few
            questions.
          </p>
        </div>
      </div>
      <div className="w-[100%] pt-[40px] flex justify-center items-center">
        <img className=" " src={doc} />
      </div>
      <Link to={`/Aipage/aiQuery/${AIType}`}>
        <div className="fixed text-[20px] bottom-0 w-[100%] h-[70px] bg-black text-white flex justify-center items-center cursor-pointer hover:bg-slate-300 hover:text-orange-500">
          BEGIN
        </div>
      </Link>
    </div>
  );
};

export default AiPage;
