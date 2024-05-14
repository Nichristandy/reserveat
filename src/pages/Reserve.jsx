import { useState } from "react";
import Table from "../component/Table";
import { MdOutlineArrowBack } from "react-icons/md";
import Modal from "../component/Modal";

const reserve = () => {
  const tables = [
    { tableName: "A", seatNumber: 6, status: true },
    { tableName: "B", seatNumber: 6, status: true },
    { tableName: "C", seatNumber: 2, status: true },
    { tableName: "D", seatNumber: 6, status: false },
    { tableName: "E", seatNumber: 2, status: true },
    { tableName: "F", seatNumber: 2, status: true },
    { tableName: "G", seatNumber: 2, status: false },
    { tableName: "H", seatNumber: 6, status: true },
    { tableName: "I", seatNumber: 6, status: true },
    { tableName: "J", seatNumber: 2, status: true },
  ];

  const [showModal, setShowModal] = useState(false);
  const [table, setTable] = useState(null);
  const openModal = (e) => {
    setShowModal(true);
    setTable(e);
  };

  const closeModal = () => {
    setShowModal(false);
    setTable(null);
  };

  const [room, setRoom] = useState("");

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
    console.log(room);
  };

  return (
    <>
      <div className="min-h-screen px-[72px] pb-10">
        <div className="flex flex-row justify-between items-center">
          <MdOutlineArrowBack size={32} />
          <div className="flex flex-row items-center gap-3 py-3">
            <img src="../Logo-merah.svg" alt="logo" />
            <span className="font-black text-[32px]">Reserveat</span>
          </div>
          <button className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl">
            LOGIN
          </button>
        </div>
        <div className="pt-16 flex flex-col md:flex-row w-full">
          {/* sisi kiri */}
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="font-black text-5xl">Lorem Ipsum</h1>
            <span className="font-medium text-2xl mt-6">Choose your table</span>
            <div className="flex flex-row gap-5 mt-5">
              {" "}
              <div className="flex flex-row gap-5 items-center">
                <span className="text-2xl font-bold">Hour:</span>{" "}
                <input
                  type="time"
                  className="bg-grey rounded-xl text-black uppercase px-2 py-1 text-2xl focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <span className="text-2xl font-bold">Date:</span>{" "}
                <input
                  type="date"
                  className="bg-grey rounded-xl text-black px-2 py-1 focus:outline-none  text-xl"
                ></input>
              </div>
            </div>
            {/* filter table */}
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
            {/* mapping table component */}
            <div className="w-full grid grid-cols-5 gap-5 mt-10 pb-10">
              {tables.map((table) => (
                <Table
                  key={table.tableName}
                  tableName={table.tableName}
                  seatNumber={table.seatNumber}
                  status={table.status}
                  openModal={() => openModal(table)}
                />
              ))}
            </div>
          </div>
          {/* menu sisi kanan */}
          <div className="w-full md:w-1/2 md:pl-8 flex flex-col gap-16">
            <div className="md:hidden flex"></div>
            <div className="w-full min-h-[311px] relative image-back md:px-5 ">
              <img src="../beef.png" className="z-0 absolute"></img>
              <span className="absolute z-1 text-white font-black text-5xl top-3/4 md:top-full left-1 md:left-10">
                See Menu
              </span>
            </div>
            <div className="w-full md:mt-16 flex-col flex gap-8 md:px-5">
              <span className="font-medium text-xl">Favorites</span>
              <div className="w-full grid grid-cols-6 gap-5">
                <div className="col-span-2 min-h-[202px] bg-grey rounded-xl"></div>
                <div className="col-span-2 min-h-[202px] bg-grey rounded-xl"></div>
                <div className="col-span-2 min-h-[202px] bg-grey rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {showModal ? (
        <Modal
          closeModal={closeModal}
          tableName={table.tableName}
          seatNumber={table.seatNumber}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default reserve;
