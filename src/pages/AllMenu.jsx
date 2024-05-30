import "../css/AllMenu.css";
import Navbar from "../component/Navbar";

const AllMenu = () => {
  return (
    <div className="seemore-main">
      <Navbar to={"/"} />
      <section className="seemore-body">
        <div>
          <h2>Top Restaurant</h2>
        </div>

        <span className="seemore-fir-sec">
          <a
            href="/reservasi"
            className="seemore-first bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/burger_rio.jpg')] "
          >
            Rio Burger
          </a>
          <div className="seemore-second justify-between">
            <a
              href="#"
              className="bg-cover bg-center fir-sec bg-[url('/public/SeemoreAssets/pizza_udin.jpg')]"
            >
              Pizza Udin
            </a>
            <a
              href="#"
              className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/pizza_udin.jpg')]"
            >
              Pizza Quatro
            </a>
          </div>
        </span>

        <div className="seemore-menu">
          <a
            href="#"
            className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/ayamgoyeng.jpg')]"
          >
            Lorem Ipsum
          </a>
          <a
            href="#"
            className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/cikenmasala.jpg')]"
          >
            Lorem Ipsum
          </a>
          <a
            href="#"
            className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/saladberenti.jpg')]"
          >
            Lorem Ipsum
          </a>
          <a
            href="#"
            className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/ramen.jpg')]"
          >
            Lorem Ipsum
          </a>
          <a
            href="#"
            className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/bacon.jpg')]"
          >
            Lorem Ipsum
          </a>
          <a
            href="#"
            className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/cookies.jpg')]"
          >
            Lorem Ipsum
          </a>
          <a
            href="#"
            className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/corndog.jpg')]"
          >
            Lorem Ipsum
          </a>
          <a
            href="#"
            className="bg-cover bg-center fir-sec bg-[url('/SeemoreAssets/crepes.jpg')]"
          >
            Lorem Ipsum
          </a>
        </div>
      </section>
    </div>
  );
};
export default AllMenu;
