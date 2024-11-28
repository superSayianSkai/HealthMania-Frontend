import { Link } from "react-router-dom";
import arrow from "../assets/img/icons/arrow.png";
const HealthFeatures = ({ title, p1, p2, img, width, right, bottom, link }) => {
  return (
    <div className="relative bg-white box-shadow rounded-2xl flex justify-between w-[11rem] h-[12rem] p-[1rem] lg:w-[40rem] lg:h-[18rem]">
      <div className="flex flex-col gap-[.75rem] w-[100%]">
        <div className="flex justify-between items-center">
          <h2 className="text-[1rem]">{title}</h2>
          <img src={arrow} className="w-[1.5rem] h-auto opacity-[70%]" />
        </div>
        <div className="mt-[-.2rem]">
          <p className="text-[.75rem] opacity-[60%]">{p2}</p>
        </div>

        <Link to={link}>
          <button className="bg-orange-500 w-[50%] lg:w-[15%] rounded-2xl text-[--secondaryText-color] text-[1rem] p-[.2rem]">
            Go
          </button>
        </Link>
      </div>
      <img
        src={img}
        width={width}
        style={{ position: "absolute", right: `${right}`, bottom: `${bottom}` }}
        className=" h-[auto] absolute  "
      />
    </div>
  );
};

export default HealthFeatures;
