import BottomNav from "../component/BottomNav";
const NavRouter = ({ children }) => {
  return (
    <div className="overflow-hidden">
      {children}
      <BottomNav className="class" />
    </div>
  );
};

export default NavRouter;
