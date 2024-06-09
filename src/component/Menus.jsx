import { GoPlusCircle, GoNoEntry } from "react-icons/go";
const Menus = ({ payment, menuName, menuDesc, menuPrice, menuImg }) => {
  return (
    <>
      {" "}
      <div className=" col-span-2 flex flex-col gap-5">
        <img className="w-full hidden md:flex rounded-lg" src={menuImg}></img>
        <img className="w-full flex md:hidden rounded-lg" src={menuImg}></img>
        <span className="font-bold text-lg md:text-2xl">{menuName}</span>
        <span className=" text-lg hidden md:flex">{menuDesc}</span>
        <span className=" text-lg hidden md:flex">{menuPrice}</span>
        {payment && (
          <div className="flex flex-row justify-between gap-2 w-full md:w-1/2 text-red">
            <GoNoEntry size={32} />
            <input
              className="border border-red rounded-lg w-full"
              type="number"
            ></input>

            <GoPlusCircle size={32} />
          </div>
        )}
      </div>
    </>
  );
};

export default Menus;
