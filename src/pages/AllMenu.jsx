import "../css/AllMenu.css";
import Navbar from "../component/Navbar";

const AllMenu = () => {
  return (
    <div className="home-main">
      <Navbar />

      <section className="home-body">
        <div>
          <h2>Top Restaurant</h2>
          <a href="/seemore">See More </a>
        </div>

        <span className="fir-sec">
          <a
            href="/reservasi"
            className="first bg-cover bg-center fir-sec bg-[url('/public/SeemoreAssets/burger_rio.jpg')] "
          >
            Rio Burger
          </a>
          <div className="second">
            <a className="bg-cover bg-center fir-sec bg-[url('/public/SeemoreAssets/pizza_udin.jpg')]">
              Pizza Udin
            </a>
            <a className="bg-cover bg-center fir-sec bg-[url('/public/SeemoreAssets/pizza_udin.jpg')]">
              Pizza Udin
            </a>
          </div>
        </span>

        <div className="home-menu">
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </section>
    </div>
  );
};
export default AllMenu;
