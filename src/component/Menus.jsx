import { GoPlusCircle, GoNoEntry } from "react-icons/go";
const Menus = () => {
  return (
    <>
      {" "}
      <div className=" col-span-2 flex flex-col gap-5">
        <img
          className="w-full hidden md:flex rounded-lg"
          src="https://placehold.co/199x202/png"
        ></img>
        <img
          className="w-full flex md:hidden rounded-lg"
          src="https://placehold.co/137x72/png"
        ></img>
        <span className="font-bold text-lg md:text-2xl">Lorem Ipsum</span>
        <span className=" text-lg hidden md:flex">
          description lorem ipsum doloris amet alknejdj
        </span>
        <div className="flex flex-row justify-between gap-2 w-full md:w-1/2 text-red">
          <GoNoEntry size={32} />
          <input
            className="border border-red rounded-lg w-1/2"
            type="number"
          ></input>

          <GoPlusCircle size={32} />
        </div>
      </div>
    </>
  );
};

export default Menus;
