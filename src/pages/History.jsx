import "../css/History.css";
import Navbar from "../component/Navbar";

const History = () => {
  return (
    <div className="history-container">
      <Navbar to={"/allmenu"} />
      <section className="history-content">
        <h1>Order List</h1>
        <nav>
          <button>All</button>
          <button>On Going</button>
          <button>Done</button>
          <button>Rescheduled</button>
        </nav>
        <div className="history-orders">
          <div className="history-order">
            <span className="history-order-content">
              <h2>Rio Burger</h2>
              <span>Reserved</span>
              <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            </span>

            <div className="history-order-actions">
              <button className="bg-orange-100">Rescheduled</button>
              <button className="bg-rose-500">Cancel</button>
            </div>
          </div>
          <div className="history-order">
            <span className="history-order-content">
              <h2>Rio Burger</h2>
              <span>Reserved</span>
              <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            </span>

            <div className="history-order-actions">
              <button className="bg-orange-100">Rescheduled</button>
              <button className="bg-rose-500">Cancel</button>
            </div>
          </div>
          <div className="history-order">
            <span className="history-order-content">
              <h2>Rio Burger</h2>
              <span>Reserved</span>
              <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            </span>

            <div className="history-order-actions">
              <button className="bg-orange-100">Rescheduled</button>
              <button className="bg-rose-500">Cancel</button>
            </div>
          </div>
          <div className="history-order">
            <span className="history-order-content">
              <h2>Rio Burger</h2>
              <span>Reserved</span>
              <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            </span>

            <div className="history-order-actions">
              <button className="bg-orange-100">Rescheduled</button>
              <button className="bg-rose-500">Cancel</button>
            </div>
          </div>
          <div className="history-order">
            <span className="history-order-content">
              <h2>Rio Burger</h2>
              <span>Reserved</span>
              <time dateTime="2024-05-26 12:00">12.00 - 13.30</time>
            </span>

            <div className="history-order-actions">
              <button className="bg-orange-100">Rescheduled</button>
              <button className="bg-rose-500">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
