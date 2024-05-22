import { NavLink } from "react-router-dom";
const SideBar = ({ role }) => {
  return (
    <div>
      <div
        className={`w-full flex-col flex justify-between
         bg-red rounded-r-xl pl-8 min-h-screen text-white pb-20`}
      >
        {role == "admin" ? null : (
          <div className="font-black text-[32px] py-8">Reserveat</div>
        )}

        <div
          className={`${
            role == "admin" ? "flex" : "hidden"
          } flex-col gap-6 text-[24px]`}
        >
          <div className="font-black text-[32px] py-8">Reserveat</div>
          <NavLink
            to={"/admin/dashboard-home"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/admin/dashboard-reservasi"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Reservasi
          </NavLink>
          <NavLink
            to={"/admin/dashboard-user"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            User
          </NavLink>
        </div>
        <span className="text-xl">Log out</span>
      </div>
    </div>
  );
};

export default SideBar;
