import HealthFeatures from "../component/HealthFeatures";
import doctor from "../assets/img/Medicine-bro(1).svg";
import { aiFeatures } from "@/data/aIFeatures";
import Profile from "@/component/Profile";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "@/context/AppContext";
import profileDefault from "../assets/img/profileDefault.jpg";
import Footer from "../component/Footer";
import { HealthFAQ } from "@/component/healthFax";
import { HealthStats } from "@/component/HealthStats";
import { Link } from "react-router-dom";
import GetStarted from "@/component/GetStarted";
const HomePage = () => {
  const { profileToggle, setTheProfileToggle } = useContext(AppContext);
  const profileIconRef = useRef();
  const profileModalRef = useRef();
  const [profile, setProfile] = useState();

  useEffect(() => {
    setProfile(
      localStorage.getItem("profilePicture")
        ? localStorage.getItem("profilePicture")
        : profileDefault
    );
  });

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
  const regex = /[^\d$]/;
  const number = -2;
  console.log(regex.test(number));
  //the answer becomes Ayotide

  return (
    <div className="relative">
      <div className="flex items-center  justify-between py-2 px-4 md:px-5 h-[7svh] shadow-2xl ">
        <h1 className="text-[1rem] md:text-[1.2rem]  cursor-pointer flex justify-center gap-2 items-center  text-center font-bold ">
          <div>
            <span className="">Health</span>
            <span className="text-orange-500">Mania</span>
          </div>
        </h1>
        <div className="flex gap-4 items-end cursor-pointer justify-center sm:relative">
          <img
            ref={profileIconRef}
            onClick={setTheProfileToggle}
            src={profile}
            className="hover:opacity-70 w-[30px] h-[30px] rounded-full object-cover"
          />
          {profileToggle && <Profile profileModalRef={profileModalRef} />}
        </div>
      </div>
      <div className="h-[93svh] w-[100%]  bg-black text-white items-center md:items-stretch flex flex-col  justify-between md:justify-between px-[1rem] md:px-[3rem] relative overflow-hidden pt-[70px] md:pt-0">
        <div className="text-center justify-center md:h-[200px] text-[3.5rem]  md:text-[6rem] lg:text-[11rem] w-[100%] font-bold flex">
          <p className="flex items-center flex-col leading-[4rem] md:leading-[12rem] md:mt-[20px] ">
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
        <div className="flex flex-col md:flex-row justify-between items-center text-[.8rem] md:text-[.8rem] md:mb-[7%] gap-8">
          <h1 className="text-center leading-[1.2rem] text-[.9rem] md:text-[.8rem]  mt-[1rem] md:text-left px-2  md:px-0  mx-auto md:mx-0 md:w-[29%]">
            Revolutionizing health monitoring with cutting-edge AI solutions for
            a healthier and better future.
          </h1>
          <div className="flex justify-center items-center gap-2">
            <h2 className=" cursor-pointer bg-white text-black rounded-3xl py-3 px-8 ">
              Learn more
            </h2>
            <Link to="/health-intelligence-age">
              <div className="cursor-pointer hover:opacity-80">
                <i className="bi bi-arrow-right text-white rounded-full text-[1rem] md:text-[1.2rem] py-3 px-6 md:py-3 md:px-4 bg-orange-500 "></i>
              </div>
            </Link>
          </div>
        </div>
        <img
          src={doctor}
          className="w-[600px] md:w-[700px] md:top-[62%] md:left-[50%] md:-translate-x-1/2  md:-translate-y-1/2 md:absolute max-w-[600px] md:max-w-[700px] mt-[-60px] md:mt-[0]"
        />
      </div>
      <HealthStats />
      <div className="mx-4 md:mx-[3rem] mt-[2rem] md:mt-[6rem] flex flex-col gap-[.2rem]">
        <h1 className="text-[1.5rem] md:text-[5.5rem] font-bold">
          Health Intelligence
        </h1>
        <p className="text-[.8rem] md:text-[1rem]  md:w-[60%] text-gray-7 00 font-medium">
          HealthMania is a health application designed to give you result and
          recommendation of your well-being, empowering you to achieve a
          healthier and better future.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[350px] md:auto-rows-[350px] lg:auto-rows-[350px]  mx-4 md:mx-[3rem] mt-[2rem] md:mt-[3rem] gap-6  justify-between  bg-[#f6f6f6]">
        {Object.values(aiFeatures).map((feature, index) => {
          return (
            <HealthFeatures
              key={index}
              color={feature.color}
              title={feature.details.title}
              p2={feature.details.description}
              img={feature.details.img}
              width={feature.features?.[0]?.width || feature.width}
              right={feature.details.right}
              bottom={feature.details.bottom}
              mainLink={feature.details.mainLink}
              typeish={feature.features?.[0]?.typeish || feature.typeish}
              colspan={feature.details.colspan}
              positionRight={feature.details.positionRight}
              positionBottom={feature.details.positionBottom}
            />
          );
        })}
      </div>
      <HealthFAQ />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomePage;
