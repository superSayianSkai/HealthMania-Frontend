import { bottomNav } from "../data/bottomNav";
import { Link } from "react-router-dom";
const BottomNav = () => {
  return (
    <div className="lg:hidden flex px-8  pt-4 justify-between fixed bg-[--tertiaryBody-color] w-[100%] bottom-0 text-2xl md:*:hidden">
      {bottomNav.map((bottomNavItem) => (
        <Link key={bottomNavItem.id} to={bottomNavItem.link}>
          <div className="flex flex-col items-center ">
            <bottomNavItem.icon fontSize={25} className="" />
            <p className="text-[12px] mt-[-3px]">{bottomNavItem.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
