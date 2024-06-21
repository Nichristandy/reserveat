import Navbar from "../component/Navbar";
import { useState, useEffect } from "react";

const History = () => {
  const [reservations, setReservations] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    const allReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];

    if (phone) {
      const userReservations = allReservations.filter(
        (reservation) => reservation.phone === phone
      );
      setReservations(userReservations);
    } else {
      setReservations(allReservations);
    }
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredReservations = reservations.filter((reservation) => {
    if (filter === "All") return true;
    return reservation.status === filter;
  });

  return (
    <div className="min-h-screen bg-white py-0 px-8">
      <Navbar to={"/allmenu"} />
      <section className="p-5">
        <h1 className="text-3xl font-bold mb-5">Order List</h1>
        <nav className="mb-5 flex flex-wrap gap-3">
          <button
            className={`px-3 py-2 rounded-xl border ${
              filter === "All" ? "bg-red text-white" : "border-blue"
            }`}
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className={`px-3 py-2 rounded-xl border ${
              filter === "Reserved" ? "bg-red text-white" : "border-blue"
            }`}
            onClick={() => handleFilterChange("Reserved")}
          >
            Reserved
          </button>
          <button
            className={`px-3 py-2 rounded-xl border ${
              filter === "On Going" ? "bg-red text-white" : "border-blue"
            }`}
            onClick={() => handleFilterChange("On Going")}
          >
            On Going
          </button>
          <button
            className={`px-3 py-2 rounded-xl border ${
              filter === "Rescheduled" ? "bg-red text-white" : "border-blue"
            }`}
            onClick={() => handleFilterChange("Rescheduled")}
          >
            Rescheduled
          </button>
        </nav>
        <div className="space-y-4">
          {filteredReservations.map((reservation, index) => (
            <div
              className="p-4 border border-blue rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center"
              key={index}
            >
              <div className="flex-grow">
                <h2 className="text-2xl font-bold">{reservation.tableName}</h2>
                <span className="block">{reservation.status}</span>
                <time
                  dateTime={`${reservation.date} ${reservation.time}`}
                  className="block"
                >
                  {reservation.date} {reservation.time}
                </time>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button className="px-3 py-2 rounded bg-blue text-white">
                  Reschedule
                </button>
                <button className="px-3 py-2 rounded bg-red text-white">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default History;
