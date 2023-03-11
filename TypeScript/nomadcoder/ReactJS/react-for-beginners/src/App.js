import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dollar, setDollar] = useState(20);
  const [coins, setCoins] = useState([]);
  const [selectIndex, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins {loading ? null : `${coins.length}`}</h1>
      <div>
        <label>
          You have
          <input
            type="number"
            defaultValue={dollar}
            onChange={(event) => setDollar(event.target.value)}
          />
          dollars can buy{" "}
          {loading ? null : `${(dollar / coins[selectIndex].quotes.USD.price).toFixed(6)} ${coins[selectIndex].name}`}
        </label>
      </div>
      <div></div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={(event) => setIndex(event.target.value)}>
          {coins.map((coin, i) => (
            <option value={i}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
