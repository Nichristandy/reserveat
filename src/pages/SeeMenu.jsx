import Menus from "../component/Menus";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import { fetchMenuRestaurant } from "../DatabaseDummy/api";

const SeeMenu = () => {
  const [room, setRoom] = useState("");
  const [allMenu, setAllMenu] = useState([]);
  const menus = [
    {
      menuName: "Burger",
      menuDesc: "Burger with cheese",
      menuPrice: "Rp 10.000",
    },
    {
      menuName: "Fried rice",
      menuDesc: "Delicious rice with bacon",
      menuPrice: "Rp 10.000",
    },
  ];
  const handleRoomChange = (e) => {
    setRoom(e.target.value);
    console.log(room);
  };

  useEffect(() => {
    const loadMenu = async () => {
      const data = await fetchMenuRestaurant();
      setAllMenu(data.data);
    };
    loadMenu();
  }, []);

  return (
    <div className="min-h-screen px-5 md:px-[72px] pb-10">
      <Navbar to={"/reservasi"} />
      <div className=" mt-16">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-5xl">Rio Burger</span>
          <span className="font-medium text-2xl">Choose your food</span>
        </div>
        {/* filter table */}
        <div className=" mt-14 overflow-x-scroll no-scrollbar flex flex-row gap-5 md:gap-8">
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
            value={"drink"}
            className={`bg-grey rounded-xl text-black ${
              room == "drink" ? "font-bold" : "font-normal"
            }  px-2 py-1 text-2xl cursor-pointer`}
            onClick={handleRoomChange}
          ></input>
        </div>
        <div className="mt-10 grid no-scrollbar overflow-y-scroll grid-cols-4 gap-8 md:gap-5 md:grid-cols-12">
          {allMenu.map((menu) => (
            <Menus
              menuName={menu.menuName}
              menuDesc={menu.menuDesc}
              menuPrice={menu.menuPrice}
              payment={false}
              key={menu}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeMenu;
