import skai from "../assets/img/skai.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { AuthContext } from "@/context/AuthProvider";
const Profile = ({ profileModalRef }) => {
  const { setTheProfileToggle } = useContext(AppContext);
  const { stillLoggedIn, LogOut } = useContext(AuthContext);

  return (
    <div
      ref={profileModalRef}
      className="sm:w-[400px] absolute bg-white h-[300px] top-0 sm:top-[180%] left-0 sm:left-auto  right-0 sm:right-[8%] z-[1000] sm:rounded-3xl shadow-xl flex justify-between items-center  flex-col gap-2 py-5  "
    >
      <i
        onClick={setTheProfileToggle}
        className="bi bi-x-lg absolute right-6 top-4 hover:opacity-70"
      ></i>
      <h1 className="text-2xl font-bold">Hi, Skai</h1>
      <div className="flex  flex-col justify-center items-center gap-4">
        <div className="relative">
          <img
            src={skai}
            className="hover:opacity-70 w-[90px] z-[-1] rounded-full"
          />

          <i className="bi bi-pencil w-[25px] h-[25px] flex items-center justify-center absolute -right-1 top-14  rounded-full text-[.8rem] bg-orange-500 text-white"></i>
        </div>
        <div className="flex gap-4">
          <div className="border-[1px] border-black rounded-full px-8 py-2 text-orange-500 md:hover:bg-black md:hover:text-white active:hover:bg-black active:hover:text-white font-bold ">
            History
          </div>

          {stillLoggedIn ? (
            <div
              onClick={LogOut}
              className="border-[1px] border-black rounded-full px-8 py-2 text-orange-500 active:hover:bg-black active:hover:text-white md:hover:bg-black md:hover:text-white font-extrabold "
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
