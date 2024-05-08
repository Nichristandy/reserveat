const Table = ({ seatNumber }) => {
  return (
    <>
      {seatNumber == 6 ? (
        <div className="col-span-2 bg-grey rounded-xl h-28 text-xl font-bold items-center justify-center flex">
          6
        </div>
      ) : (
        <div className="col-span-1 bg-grey rounded-xl text-xl font-bold items-center justify-center flex">
          2
        </div>
      )}
    </>
  );
};

export default Table;
