import { NavLink } from "react-router-dom";
import { MdOutlineArrowBack, MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import ModalLayout from "./ModalLayout";

const Navbar = ({ to, isHomepage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLogin(true);
    alert("you are logged in");
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <>
      {" "}
      <div className="w-full flex flex-row justify-between items-center">
        {!isHomepage && (
          <NavLink to={to}>
            <MdOutlineArrowBack size={32} />
          </NavLink>
        )}
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
          {isLogin ? (
            <button
              onClick={handleOpenModal}
              className="bg-red hidden md:flex rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
            >
              LOGIN
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red hidden md:flex rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
            >
              LOG OUT
            </button>
          )}
        </div>
        <button className="flex md:hidden" onClick={handleIsOpen}>
          <MdOutlineMenu size={32} />
        </button>
      </div>
      {isOpen && (
        <div className="w-full py-4 flex justify-center items-center bg-red rounded-xl font-bold text-white">
          Reschedule
        </div>
      )}
      {modal && (
        <ModalLayout onClick={handleCloseModal}>
          <form onSubmit={handleLogin}>
            <div className="rounded-b-xl flex-col flex py-4 px-6 gap-3">
              <div className="flex flex-col">
                <span className="text-2xl ml-2">Phone Number</span>
                <input
                  type="tel"
                  placeholder="input your phone number"
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>
            </div>
            <div className="mt-4 flex flex-row py-4 px-6 justify-between items-end">
              <button
                type="submit"
                className="bg-blue rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
              >
                Log In
              </button>
            </div>
          </form>
        </ModalLayout>
      )}
    </>
  );
};

export default Navbar;
