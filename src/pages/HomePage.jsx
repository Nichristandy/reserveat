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
      </section>
      <section className="home-body">
        <div>
          <h2>Top Restaurant</h2>
          <a href="/seemore">See More </a>
        </div>
        <a href="/reservasi" className="first">Lorem Ipsum</a>
        <div className="second">
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
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
export default Home;
