import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { AuthContext } from "@/context/AuthProvider";
import { useRef } from "react";
import profileDefault from "../assets/img/profileDefault.jpg";

const Profile = ({ profileModalRef }) => {
  const { setTheProfileToggle } = useContext(AppContext);
  const { stillLoggedIn, LogOut } = useContext(AuthContext);
  const [fetchedImage, setFetchedImage] = useState();
  const theDate = new Date();
  let timeOfTheDay;
  const timeOfTheDayInNumber = theDate.getHours();
  if (timeOfTheDayInNumber < 12) {
    timeOfTheDay = "Good morning";
  } else if (timeOfTheDayInNumber < 18) {
    timeOfTheDay = "Good afternoon";
  } else {
    timeOfTheDay = "Good evening";
  }
  useEffect(() => {
    const storedImage = localStorage.getItem("profilePicture")
      ? localStorage.getItem("profilePicture")
      : profileDefault;
    console.log(storedImage);

    setFetchedImage(storedImage);
  }, [fetchedImage]);

  const imageRef = useRef();
  const ClickImage = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const fetchImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        localStorage.setItem("profilePicture", reader.result);
        setFetchedImage(reader.result);
      };
    }
  };

  return (
    <div
      ref={profileModalRef}
      className="sm:w-[400px] absolute bg-white h-[300px] top-0 sm:top-[180%] left-0 sm:left-auto  right-0 sm:right-[8%] z-[1000] sm:rounded-3xl shadow-xl flex justify-between items-center  flex-col gap-2 py-5 text-center"
    >
      <i
        onClick={setTheProfileToggle}
        className="bi bi-x-lg absolute right-3  top-4 hover:opacity-70"
      ></i>
      <h1 className="text-[1.5rem] font-bold text-center">
         {timeOfTheDay}
      </h1>
      <div className="flex  flex-col justify-center items-center gap-4 ">
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            ref={imageRef}
            hidden
            onChange={fetchImage}
          />
          <img
            src={fetchedImage}
            onClick={ClickImage}
            className="hover:opacity-70 w-[90px] h-[90px] object-cover  z-[-1] rounded-full"
          />

          <i className="bi bi-pencil w-[25px] h-[25px] flex items-center justify-center absolute -right-1 top-14  rounded-full text-[.8rem] bg-orange-500 text-white"></i>
        </div>
        <div className="flex gap-4">
          <Link to="/history">
            <div className="border-[1px] border-black rounded-full px-8 py-2 text-orange-500 md:hover:bg-black md:hover:text-white active:hover:bg-black active:hover:text-white  select-none">
              History
            </div>
          </Link>

          {stillLoggedIn ? (
            <div
              onClick={LogOut}
              className="border-[1px] border-black rounded-full px-8 py-2 text-orange-500 active:hover:bg-black active:hover:text-white md:hover:bg-black md:hover:text-white "
            >
              Log out
            </div>
          ) : (
            <Link to="/signIn">
              <div className="border-[1px] border-black rounded-full px-8 py-2 text-orange-500 active:hover:bg-black active:hover:text-white md:hover:bg-black md:hover:text-white font-extrabold ">
                Sign in
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="flex text-[.7rem] gap-3 items-center justify-center">
        <h2>Privacy Policy</h2>
        <div className="border-2 w-[7px] h-[7px] rounded-full bg-black"></div>
        <p>Terms of service</p>
      </div>
    </div>
  );
};

export default Profile;
