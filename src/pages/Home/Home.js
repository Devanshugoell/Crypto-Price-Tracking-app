import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Larget <br /> Crypto Market
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency market . Sign up to
          explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="Search Crypto.." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
