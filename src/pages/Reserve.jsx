import { useState, useEffect } from "react";
import Table from "../component/Table";
import Modal from "../component/Modal";
import Navbar from "../component/Navbar";
import { fetchTables } from "../DatabaseDummy/api";

const reserve = () => {
  const [showModal, setShowModal] = useState(false);
  const [tables, setTables] = useState([]);
  const [room, setRoom] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [selectedTable, setSelectedTable] = useState([]);
  const [filteredTables, setFilteredTables] = useState([]);
  const [unFilteredTables, setUnFilteredTables] = useState([]);

  useEffect(() => {
    const loadTables = async () => {
      const data = await fetchTables();
      setTables(data);
      setUnFilteredTables(data);
    };
    loadTables();
  }, []);

  useEffect(() => {
    if (date && time && room) {
      const filtered = unFilteredTables.filter(
        (table) =>
          table.room.toLowerCase() === room.toLowerCase() &&
          (!table.date || table.date !== date || table.time !== time)
      );
      setFilteredTables(filtered);
    } else {
      setFilteredTables(unFilteredTables);
    }
  }, [date, time, room, unFilteredTables]);

  const openModal = (e) => {
    setShowModal(true);
    setSelectedTable(e);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTable(null);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
    console.log(room);
  };

  const bookTable = (e) => {
    e.preventDefault();
    // Update the tables state to mark the selected table as booked
    const updatedTables = tables.map((table) =>
      table.tableName === selectedTable.tableName
        ? { ...table, status: false, date, time }
        : table
    );
    setTables(updatedTables);

    // Update filteredTables as well
    const updatedFilteredTables = filteredTables.map((table) =>
      table.tableName === selectedTable.tableName
        ? { ...table, status: false, date, time }
        : table
    );
    setFilteredTables(updatedFilteredTables);
    closeModal();
  };

  return (
    <>
      <div className="min-h-screen px-5 md:px-[72px] pb-10">
        <Navbar to={"/"} />

        <div className="pt-16 flex flex-col md:flex-row w-full">
          {/* sisi kiri */}
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="font-black text-3xl md:text-5xl">Rio Hamburger</h1>
            <span className="font-medium text-2xl mt-3 md:mt-6">
              Choose your table
            </span>
            <div className="flex flex-col md:flex-row gap-5 mt-2 md:mt-5">
              {" "}
              <div className="flex flex-row gap-5 items-center">
                <span className="text-2xl font-bold">Hour:</span>{" "}
                <input
                  type="time"
                  className="bg-grey rounded-xl text-black uppercase px-2 py-1 text-2xl focus:outline-none"
                  onChange={(e) => setTime(e.target.value)}
                ></input>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <span className="text-2xl font-bold">Date:</span>{" "}
                <input
                  type="date"
                  className="bg-grey rounded-xl text-black px-2 py-1 focus:outline-none  text-xl"
                  onChange={(e) => setDate(e.target.value)}
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
            <div className="w-full grid grid-cols-5 gap-5 mt-10 pb-5 md:pb-10">
              {filteredTables.map((table) => (
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
            <div className="w-full min-h-[146px] md:min-h-[311px] relative image-back md:px-5 ">
              <img src="../beef.png" className="z-0 absolute"></img>
              <span className="absolute z-1 text-white font-black text-2xl md:text-5xl top-full md:top-full left-1 md:left-10">
                See Menu
              </span>
            </div>
            <div className="w-full mt-4 md:mt-16 flex-col flex gap-8 md:px-5">
              <span className="font-medium text-xl">Favorites</span>
              <div className="w-full grid grid-cols-4 md:grid-cols-6 gap-5">
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
          tableName={selectedTable.tableName}
          seatNumber={selectedTable.seatNumber}
          date={date}
          time={time}
          bookTable={bookTable}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default reserve;
