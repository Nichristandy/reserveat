import "../css/HomePage.css";
import Navbar from "../component/Navbar";
import SearchBar from "../component/searchBar";

const Home = () => {
  return (
    <div className="home-main">
      <Navbar />
      <SearchBar />
      <section className="home-hero">
        <img src="/HomeAssets/couple-enjoying-food-restaurant.jpg" alt="" />
        <span className="home-hero-capt">
          <h2>Reserve Your Place</h2>
          <p>
            {" "}
            easy way to reserve your place without
            <br />
            waiting at the waiting line and waiting for the food
            <br />
            <br />
            <a href="">BROWSE RESTAURANT</a>
          </p>
        </span>
      </section>
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

        {/* <div className="home-menu">
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div> */}
      </section>
    </div>
  );
};
export default Home;
