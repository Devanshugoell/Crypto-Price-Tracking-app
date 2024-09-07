import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

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
        {displayCoin.map((item, index) => {
          return (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div className="coin">
                <img src={item.image} alt="Crypto-image" />
                <p>{item.name.slice(0, 15) + " - " + item.symbol}</p>
              </div>
              <p>
                {currency.symbol} {item.current_price.toLocaleString()}
              </p>
              <p
                className={
                  item.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p>
                {currency.symbol} {item.market_cap.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
