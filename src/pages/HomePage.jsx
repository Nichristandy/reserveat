import "../css/HomePage.css";
import SearchBar from "../component/searchBar";

const Home = () => {
  return (
    <div className="home-main">
      <SearchBar />
      <section className="home-hero">
        <img src="/HomeAssets/couple-enjoying-food-restaurant.jpg" alt="" />
        <p>
          {" "}
          <h2>Reserve Your Place</h2>
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
          <a href="#">See More </a>
        </div>
        <p className="first">Lorem Ipsum</p>
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
