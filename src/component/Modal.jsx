import React from "react";

const Modal = ({ closeModal, tableName, seatNumber }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" min-w-[446px] bg-white rounded-xl">
        <div className="flex-row flex items-center justify-between px-4 py-4 bg-red w-full rounded-t-xl text-white">
          <div className="flex flex-row gap-2">
            <img src=".././Logo.svg"></img>
            <h1 className="font-black text-[32px]">Reserveat</h1>
          </div>

          <button className="font-black text-2xl" onClick={closeModal}>
            Close
          </button>
        </div>
        <div className="w-full pt-3 px-6 flex flex-row justify-between items-center">
          <span className="text-2xl">Table: {tableName}</span>
          <span className="text-2xl">People: {seatNumber}</span>
        </div>
        <form>
          <div className="rounded-b-xl flex-col flex py-4 px-6 gap-3">
            <div className="flex flex-col">
              <span className="text-2xl ml-2">Name</span>
              <input
                type="text"
                placeholder="input your name"
                className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
              ></input>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl ml-2">Phone Number</span>
              <input
                type="tel"
                placeholder="input your phone number"
                className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
              ></input>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl ml-2">Email</span>
              <input
                type="email"
                placeholder="input your email"
                className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
              ></input>
            </div>
          </div>
          <div className="mt-4 flex flex-row py-4 px-6 justify-between items-end">
            <button
              type="submit"
              className="bg-blue rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
            >
              Reserve
            </button>
            <button
              type="submit"
              className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
            >
              ORDER FOOD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
