import "../css/History.css";
import Navbar from "../component/Navbar";

const History = () => {
  return (
    <div>
      <Navbar />
      <div className="history-cont">
        <section>
          <div></div>
        </section>
        <section>
          <h1>Order List</h1>
          <nav>
            <button>All</button>
            <button>On Going</button>
            <button>Done</button>
            <button>Rescheduled</button>
          </nav>

          <div className="history-order">
            <h2>Rio Burger</h2>
            <span>Reserved</span>
            <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            <button className="bg-orange-100">Rescheduled</button>
            <button className="bg-rose-500">Cancel</button>
          </div>
          <div className="history-order">
            <h2>Rio Burger</h2>
            <span>Reserved</span>
            <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            <button className="bg-orange-100">Rescheduled</button>
            <button className="bg-rose-500">Cancel</button>
          </div>
          <div className="history-order">
            <h2>Rio Burger</h2>
            <span>Reserved</span>
            <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            <button className="bg-orange-100">Rescheduled</button>
            <button className="bg-rose-500">Cancel</button>
          </div>
          <div className="history-order">
            <h2>Rio Burger</h2>
            <span>Reserved</span>
            <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            <button className="bg-orange-100">Rescheduled</button>
            <button className="bg-rose-500">Cancel</button>
          </div>
          <div className="history-order">
            <h2>Rio Burger</h2>
            <span>Reserved</span>
            <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            <button className="bg-orange-100">Rescheduled</button>
            <button className="bg-rose-500">Cancel</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
