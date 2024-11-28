import health from "../assets/img/health.png";
const ResultPage = () => {
  return (
    <div className="grid place-content-center h-[100vh] md:bg-slate-200">
      <div className="flex flex-col  items-center lg:w-[700px] h-[500px] md:bg-white rounded-2xl md:your-div cursor-pointer">
        <img src={health} className="w-[350px] " />
        <p className="font-bold text-[1.5rem] ">Your Result is out! </p>
        <table className="w-[300px] md:w-[280px]  lg:w-[550px] text-[.7rem] lg:text-[.8rem] overflow-scroll  mt-[20px] ">
          <tbody>
            <tr>
              <td>Sleep disorder</td>
              <td>apania</td>
            </tr>
            <tr>
              <td>Recommendation</td>
              <td className="h-[30px]">
                Hey, we suggest you get a good sleep tonight.
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="flex flex-col  w-[500px] justify-around gap-2">
              <div className="w-[100%px] py-2 px-4 rounded-2xl text-center">
                <p className="font-bold text-[.9rem]">Sleep Disorder</p>
                <p className="text-[.8rem]">Apania</p>
              </div>
              <div className="w-[100%] py-2 px-4 rounded-2xl text-center">
                <p className="font-bold text-[.9rem]">Recommendation</p>
                <p className="text-[.8rem]">
                  Hey, we suggest you get a good sleep tonight.
                </p>
              </div>
            </div> */}
        <button className="placeholder:text-black bg-[#ff8225] text-white hover:bg-black py-[.8rem] mt-[30px]  px-[1.5rem] rounded-2xl text-[.8rem] your-div">
          Go back home
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
