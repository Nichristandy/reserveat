import { useState } from "react";

const Table = ({ seatNumber, status, openModal }) => {
  return (
    <>
      {seatNumber >= 6 ? (
        <button
          className={`col-span-2 ${
            status == 0 ? "bg-grey" : "bg-red text-white disable"
          } rounded-xl h-28 text-xl font-bold items-center justify-center flex`}
          onClick={openModal}
          disabled={status == 0}
        >
          6
        </button>
      ) : (
        <button
          className={`col-span-1 ${
            status == 0 ? "bg-grey" : "bg-red text-white disable"
          } rounded-xl text-xl font-bold items-center justify-center flex`}
          onClick={openModal}
          disabled={status == 0}
        >
          2
        </button>
      )}
    </>
  );
};

export default Table;
