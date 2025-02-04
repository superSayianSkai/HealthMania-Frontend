import { Link } from "react-router-dom";
const HealthFeatures = ({
  title,
  p1,
  p2,
  img,
  width,
  right,
  bottom,
  link,
  color,
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative box-shadow flex justify-between  cursor-pointer  rounded-[2%] overflow-hidden   "
    >
      <div className="flex flex-col gap-[.75rem] w-[100%] justify-between p-2 m-2">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-[2rem] md:text-[1.6rem] font-bold">{title}</h2>
            {/* <img src={arrow} className="w-[1.5rem] h-auto opacity-[70%]" /> */}
          </div>
          <div className="mt-[-.2rem]">
            <p className="text-[.7rem] md:text-[.8rem] opacity-[60%]">{p2}</p>
          </div>
        </div>

        <Link to={link}>
          <div className="cursor-pointer mb-8">
            <i className="bi bi-arrow-right text-white rounded-full text-[1.8rem] md:text-[1.2rem] py-2 px-3 bg-orange-500 hover:bg-black"></i>
          </div>
        </Link>
      </div>
      <img
        src={img}
        style={{
          position:"absolute",
          right:right,
          bottom:bottom,
          width: width,
        }}
        className=""
      />
    </div>
  );
};

export default HealthFeatures;
