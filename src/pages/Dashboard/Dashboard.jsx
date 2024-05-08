import LineChart from "../../component/Charts/LineChart";
import SideBar from "../../component/SideBar";
import UserBar from "../../component/UserBar";
import { useState } from "react";
import Table from "../../component/Table";

const Dashboard = () => {
  const users = ["John doe", "Mary Jane", "Doe John", "Jane Mary"];

  const indoorSeat = [6, 6, 2, 6, 2, 2, 2, 6, 6, 2];
  const outdoorSeat = [6, 2, 6, 2, 2, 2, 6, 2, 6, 6];
  const [room, setRoom] = useState("");

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
    console.log(room);
  };

  return (
    <div className="min-h-screen w-full flex  bg-grey pr-8">
      <div className="w-2/12 h-full">
        <SideBar />
      </div>
      <div className="w-full grid grid-cols-10 gap-5 py-8 pl-5 overflow-y-scroll h-screen">
        <div className="col-span-7 bg-white rounded-xl p-8 flex items-center justify-center">
          <LineChart />
        </div>
        <div className=" col-span-3 bg-white rounded-xl p-8">
          <div className="flex flex-col gap-5">
            {users.map((user) => (
              <UserBar key={user} user={user} />
            ))}
          </div>
        </div>
        <div className=" col-span-7 bg-white rounded-xl p-8 ">
          <div className="w-full grid grid-cols-10 gap-8 py-8 pl-5">
            <div className="col-span-5">
              <div className="flex flex-row gap-5 items-center">
                <span className="text-2xl font-bold">Hour:</span>{" "}
                <input
                  type="time"
                  className="bg-grey rounded-xl text-black uppercase px-2 py-1 text-2xl focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-row gap-5 items-center mt-5">
                <span className="text-2xl font-bold">Date:</span>{" "}
                <input
                  type="date"
                  className="bg-grey rounded-xl text-black px-2 py-1 focus:outline-none  text-xl"
                ></input>
              </div>
              <div className=" mt-14 flex flex-row gap-8">
                <input
                  type="button"
                  value={"Indoor"}
                  className={`bg-grey rounded-xl text-black  px-2 py-1 ${
                    room == "Indoor" ? "font-bold" : "font-normal"
                  } text-2xl cursor-pointer`}
                  onClick={handleRoomChange}
                ></input>
                <input
                  type="button"
                  value={"Outdoor"}
                  className={`bg-grey rounded-xl text-black ${
                    room == "Outdoor" ? "font-bold" : "font-normal"
                  }  px-2 py-1 text-2xl cursor-pointer`}
                  onClick={handleRoomChange}
                ></input>
              </div>
              <div className="w-full grid grid-cols-5 gap-5 mt-10">
                {room == "Indoor"
                  ? indoorSeat.map((seat, id) => (
                      <Table key={id} seatNumber={seat} />
                    ))
                  : outdoorSeat.map((seat, id) => (
                      <Table key={id} seatNumber={seat} />
                    ))}
              </div>
            </div>
            <div className="col-span-5">
              <div className="rounded-xl min-h-[522px] border border-blue py-8 px-6">
                <div className="flex flex-row pb-3 border-b border-b-blue justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold">Reservant</span>
                    <span className="text-2xl">John doe</span>
                  </div>
                  <div className="flex flex-col gap-1 text-end">
                    <span className="text-2xl font-bold">Phone Number:</span>
                    <span className="text-2xl">+6212345678</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-bold text-2xl flex flex-col gap-1">
                    Menu Order:
                    <span>-</span>
                  </div>
                </div>

                {/* button */}
                <div className="w-full flex flex-row justify-between mt-56">
                  <button className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl">
                    Reschedule
                  </button>
                  <button className="bg-blue rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl">
                    Arrived
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 bg-white rounded-xl p-8">cashier</div>
      </div>
    </div>
  );
};

export default Dashboard;
