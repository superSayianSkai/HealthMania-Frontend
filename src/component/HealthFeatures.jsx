import { Link } from "react-router-dom";

const HealthFeatures = ({
  title,
  p1,
  p2,
  img,
  width,
  mainLink,
  color,
  colspan,
  bottom,
  positionRight,
  positionBottom,
}) => {
  return (
    <div
      className={`health-feature relative overflow-hidden rounded-[2%] shadow-md group cursor-pointer ${
        colspan === 3
          ? "md:col-span-3"
          : colspan === 2
          ? "md:col-span-2"
          : "md:col-span-1"
      } transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
    >
      <Link to={mainLink} className="">
        <div className="">
          <img
            src={img}
            alt={title}
            width={width}
            className={`transition-transform duration-10000 ease-in-out transform hover:scale-110 absolute ${
              positionRight === 0
                ? "bottom-[-60px]"
                : positionRight === 1
                ? "bottom-[0px] sm:bottom-[-20px] md:bottom-[-350px]"
                : positionBottom === 2
                ? "bottom-[-20px] md:bottom-[-320px]"
                : positionRight === 3
                ? "bottom-[-35px]"
                : ""
            }`}
          />
        </div>
        <div className="absolute inset-0 animated-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-20 h-20 border-4 border-orange-500 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h2 className="text-[2rem] font-bold text-white mb-2 drop-shadow-lg group-hover:text-orange-500">
            {title}
          </h2>
          <p className="text-sm text-white opacity-90 mb-4 drop-shadow">{p2}</p>
        </div>
        <style>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient {
          background: linear-gradient(270deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%);
          background-size: 200% 200%;
          animation: gradient-animation 8s ease infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .health-feature .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
      </Link>
    </div>
  );
};

export default HealthFeatures;
