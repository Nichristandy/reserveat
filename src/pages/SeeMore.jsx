import "../css/SeeMore.css";
import { Resto } from "../DatabaseDummy/Resto";
import { useEffect } from "react";
import Navbar from "../component/Navbar";

const SeeMore = () => {
  useEffect(() => {
    console.log(Resto);
  }, []);

  return (
    <div className="allcontainer">
      <Navbar />
      <div className="seemore-container">
        <section className="seemore-grid">
          <div className="grid-big">
            <img src="/SeemoreAssets/burger_rio.jpg" alt="" />
            <a href="">Burger Rio</a>
          </div>
          <div className="grid-small">
            <div>
              <img src="/SeemoreAssets/pizza_udin.jpg" alt="" />
              <a href="">Pizza Udin</a>
            </div>
            <div>
              <img src="/SeemoreAssets/pizza_udin.jpg" alt="" />
              <a href="">Pizza Udin</a>
            </div>
          </div>
          <div className="grid-seemore"></div>
        </section>

        <section>
          <h1>
            ALL RESTAURANT
          </h1>
          <div className="list">
            <img src="/SeemoreAssets/burger_rio.jpg" alt="" />
            <a href="">Burger Rio</a>
          </div>
          <div className="list">
            <img src="/SeemoreAssets/pizza_udin.jpg" alt="" />
            <a href="">Pizza Udin</a>
          </div>
          <div className="list">
            <img src="/SeemoreAssets/burger_rio.jpg" alt="" />
            <a href="">Burger Rio</a>
          </div>
          <div className="list">
            <img src="/SeemoreAssets/pizza_udin.jpg" alt="" />
            <a href="">Pizza Udin</a>
          </div>
          <div className="list">
            <img src="/SeemoreAssets/burger_rio.jpg" alt="" />
            <a href="">Burger Rio</a>
          </div>
          <div className="list">
            <img src="/SeemoreAssets/pizza_udin.jpg" alt="" />
            <a href="">Pizza Udin</a>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SeeMore;
