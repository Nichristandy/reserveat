import { NavLink } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

const Navbar = ({ to }) => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-row justify-between items-center">
        <NavLink to={to}>
          <MdOutlineArrowBack size={32} />
        </NavLink>
        <div className="flex flex-row items-center gap-3 py-3">
          <img src="../Logo-merah.svg" alt="logo" />
          <span className="font-black text-[32px]">Reserveat</span>
        </div>
        <button className="bg-red hidden md:flex rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl">
          LOGIN
        </button>
      </div>
    </>
  );
};

export default Navbar;