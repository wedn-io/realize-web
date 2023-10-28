import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinPrice, setCoinPrice] = useState(0);
  const [price, setPrice] = useState(0);
  let [changePrice, setChangePrice] = useState(0);

  let onChange = (event) => {
    setCoinPrice(event.target.value);
    priceInverter();
  };

  let priceChange = (event) =>{
    setPrice(event.target.value);
    priceInverter();
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  let priceInverter = () => {
    console.log(price, coinPrice);
    setChangePrice(price / coinPrice);
  };

  //console.log(changePrice);

  return (
    <div>
      <h1>The Coins!</h1>  
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={onChange}>
        {coins.map((item) => (
          <option key={item.id} value={item.quotes.USD.price}>{item.name} {item.symbol} : {item.quotes.USD.price} USD</option>
        ))}
      </select>
      <input type="text" onChange={priceChange} value={price}/>
      <span>{changePrice.toFixed(8)}</span>
    </div>
  );
}

export default App;
