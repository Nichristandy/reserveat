import { NavLink } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-row justify-between items-center">
        <NavLink to="/">
          <MdOutlineArrowBack size={32} />
        </NavLink>
        <div className="flex flex-row items-center gap-3 py-3">
          <img src="../Logo-merah.svg" alt="logo" />
          <span className="font-black text-[32px]">Reserveat</span>
        </div>

        <div className="flex gap-2">
          <NavLink to="/history">
            <button className="bg-red hidden md:flex rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl ">
              History
            </button>
          </NavLink>
          <NavLink to="#">
            <button className="bg-red hidden md:flex rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl">
              LOGIN
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
