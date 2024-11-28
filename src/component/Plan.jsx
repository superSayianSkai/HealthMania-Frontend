import calendar from "../assets/img/calendar.png";
import runningGuy from "../assets/img/runningGuy.png";

const Plan = () => {
  return (
    <div className="bg-white box-shadow rounded-[6px] py-2 px-6 flex items-center justify-between ">
      <div>
        <h3 className="text-[1rem]">Build your workout plan.</h3>
        <button className="text-[#ff8225] mt-[10px] text-[.75rem] cursor-pointer">
          Build
        </button>
      </div>
      <div className="relative">
        <img src={calendar} className="w-[80px] h-auto" />
        <img
          src={runningGuy}
          className="w-[60px] h-auto absolute top-[20px] right-[-10px]"
        />
      </div>
    </div>
  );
};

export default Plan;
