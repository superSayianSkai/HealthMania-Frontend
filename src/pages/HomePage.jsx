import HealthFeatures from "../component/HealthFeatures";
import doctor from "../assets/img/Medicine-bro(1).svg";
import { AIFeature } from "@/data/AIFeature";
import Profile from "@/component/Profile";
import skai from "../assets/img/skai.jpeg";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/context/AppContext";
const HomePage = () => {
  const { profileToggle, setTheProfileToggle } = useContext(AppContext);
  const profileIconRef = useRef();
  const profileModalRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        profileIconRef.current &&
        !profileIconRef.current.contains(e.target) &&
        profileModalRef.current &&
        !profileModalRef.current.contains(e.target)
      ) {
        console.log(e.target);
        console.log("all was pressed execept the profile icon");
        setTheProfileToggle();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });

  console.log(profileToggle);
  return (
    <div className="text-[--text-color] relative">
      {/* {profileToggle && (
        <div
          // onClick={setTheProfileToggle}
          className="absolute bg-red-500 inset-0 z-10 h-[100%] opacity-0"
        ></div>
      )} */}
      <div className="flex items-center  justify-between py-2 px-4 md:px-5 h-[7svh] shadow-2xl ">
        <h1 className="text-[1rem] md:text-[1.2rem]  cursor-pointer flex justify-center gap-2 items-center  text-center font-bold ">
          {/* <img src={running} className="w-[25px] h-[25px]" /> */}
          <div>
            <span className="">Health</span>
            <span className="text-orange-500">Mania</span>
          </div>
        </h1>
        <div className="flex gap-4 items-end cursor-pointer justify-center sm:relative">
          {/* <h2 className="hover:opacity-70 hidden md:block text-[.8rem]">
            My health
          </h2>
          <h2 className="hover:opacity-70 hidden md:block text-[.8rem]">
            Notifications
          </h2> */}
          {/* <i className="bi bi-bell text-[1rem] md:hidden "></i> */}
          <img
            ref={profileIconRef}
            onClick={setTheProfileToggle}
            src={skai}
            className="hover:opacity-70 w-[30px] rounded-full"
          />
          {profileToggle && <Profile profileModalRef={profileModalRef} />}
        </div>
      </div>
      <div className="h-[93svh] w-[100%]  bg-black text-white items-center md:items-stretch flex flex-col  justify-between md:justify-between mb-[20px] px-[1rem] md:px-[3rem] relative overflow-hidden pt-[70px] md:pt-0">
        <div className="text-center justify-center md:h-[200px] text-[3rem] md:text-[9.5rem] w-[100%] font-bold flex">
          <p className="flex items-center flex-col leading-[4rem] md:leading-[10rem] md:mt-[40px]">
            <div className="">
              <span className="">Good</span>
              <span className="">Health</span>
            </div>
            <div>
              <div className="flex md:gap-48">
                <span className="">Better</span>
                <span className="text-orange-500">Future</span>
              </div>
            </div>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-[1rem] md:text-[.8rem] md:mb-[7%] gap-8">
          <h1 className="text-center leading-[1.2rem] font-[2.5rem] mt-[1.5rem] md:text-left px-2  md:px-0 md:w-[29%]">
            Revolutionizing health monitoring with cutting-edge AI solutions for
            a healthier and better future.
          </h1>
          <div className="flex justify-center items-center gap-2">
            <h2 className=" cursor-pointer bg-white text-black rounded-3xl py-3 px-8 font-bold ">
              Learn more
            </h2>
            <div className="cursor-pointer hover:opacity-80">
              <i className="bi bi-arrow-right text-white rounded-full text-[.8rem] md:text-[1.2rem] py-2 px-3 md:py-3 md:px-4 bg-orange-500 "></i>
            </div>
          </div>
        </div>
        <img
          src={doctor}
          className="w-[600px] md:w-[700px] md:top-[62%] md:left-[50%] md:-translate-x-1/2  md:-translate-y-1/2 md:absolute max-w-[600px] md:max-w-[700px] mt-[-60px] md:mt-[0]"
        />
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[280px] lg:auto-rows-[200px]  mx-4 md:mx-5 mt-10 gap-3  justify-between ">
        {AIFeature.map((feature, index) => (
          <HealthFeatures
            color={feature.color}
            key={index}
            title={feature.title}
            p1={"No records"}
            p2={feature.about}
            img={feature.img}
            width={feature.width}
            right={feature.right}
            bottom={feature.bottom}
            link={feature.link}
          />
        ))}
      </div>
      <p className="text-center text-[.8rem] pt-10 pb-5 cursor-pointer">
        Made with love by the G-IHUB team
      </p>
    </div>
  );
};

export default HomePage;
