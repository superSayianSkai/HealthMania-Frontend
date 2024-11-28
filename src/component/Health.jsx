import { TbReportMedical } from "react-icons/tb";

const Health = () => {
  return (
    <div className="w-[110%] overflow-scroll">
      <div className="flex overflow-scroll  w-[900px] gap-4 h-[270px]">
        <div className="bg-[--secondaryBody-color] text-[--secondaryText-color] rounded-[40px] px-6 py-4 flex flex-col w-[70vw] h-[270px]">
          <div className="flex justify-between mt-[10px]">
            <div className="bg-gray-500 rounded-full w-[60px] h-[60px]   flex justify-center items-center">
              <TbReportMedical className="text-[35px]" />
            </div>
            <h1 className="flex flex-col w-[50px]">
              <span className="text-[20px] self-end">Apr</span>
              <span className="text-[40px] mt-[-10px]">30</span>
            </h1>
          </div>
          <p className="flex flex-col mt-[50px] ">
            <span className="text-[35px]">Heart</span>
            <span className="text-[35px] mt-[-10px]">Health</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Health;
