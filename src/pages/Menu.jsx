import Navbar from "../component/Navbar";
import { useState } from "react";
const Menu = () => {
  const [room, setRoom] = useState("");

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
    console.log(room);
  };

  return (
    <div className="min-h-screen px-5 md:px-[72px] pb-10">
      <Navbar />
      <div className=" mt-16">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-5xl">Lorem Ipsum</span>
          <span className="font-medium text-2xl">Choose your food</span>
        </div>
        {/* filter table */}
        <div className=" mt-14 flex flex-row gap-8">
          <input
            type="button"
            value={"All"}
            className={`bg-grey rounded-xl text-black  px-2 py-1 ${
              room == "All" ? "font-bold" : "font-normal"
            } text-2xl cursor-pointer`}
            onClick={handleRoomChange}
          ></input>
          <input
            type="button"
            value={"Main"}
            className={`bg-grey rounded-xl text-black ${
              room == "Main" ? "font-bold" : "font-normal"
            }  px-2 py-1 text-2xl cursor-pointer`}
            onClick={handleRoomChange}
          ></input>
          <input
            type="button"
            value={"rice"}
            className={`bg-grey rounded-xl text-black ${
              room == "rice" ? "font-bold" : "font-normal"
            }  px-2 py-1 text-2xl cursor-pointer`}
            onClick={handleRoomChange}
          ></input>
          <input
            type="button"
            value={"drink"}
            className={`bg-grey rounded-xl text-black ${
              room == "drink" ? "font-bold" : "font-normal"
            }  px-2 py-1 text-2xl cursor-pointer`}
            onClick={handleRoomChange}
          ></input>
          <input
            type="button"
            value={"full course"}
            className={`bg-grey rounded-xl text-black ${
              room == "full course" ? "font-bold" : "font-normal"
            }  px-2 py-1 text-2xl cursor-pointer`}
            onClick={handleRoomChange}
          ></input>
        </div>
        <div className="mt-10 grid grid-cols-12">
          <div className=" col-span-2 flex flex-col gap-5">
            <img
              className="w-full rounded-lg"
              src="https://placehold.co/199x202/png"
            ></img>
            <span className="font-bold text-2xl">Lorem Ipsum</span>
            <span className=" text-lg">
              description lorem ipsum doloris amet alknejdj
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
