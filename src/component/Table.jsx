const Table = ({ seatNumber, status }) => {
  return (
    <>
      {seatNumber == 6 ? (
        <div
          className={`col-span-2 ${
            status == true ? "bg-grey" : "bg-red text-white"
          } rounded-xl h-28 text-xl font-bold items-center justify-center flex`}
        >
          6
        </div>
      ) : (
        <div
          className={`col-span-1 ${
            status == true ? "bg-grey" : "bg-red text-white"
          } rounded-xl text-xl font-bold items-center justify-center flex`}
        >
          2
        </div>
      )}
    </>
  );
};

export default Table;
