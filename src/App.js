import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [info, setInfo] = useState();
  const [input, setInput] = useState({
    grams: null,
    ounces: null,
    result: null
  });
  const [answer, setAnswer] = useState();

  const handleInputChange = unit => (evt) => {
    /*console.log('evt',evt)*/
    const newValue = parseInt(evt.target.value);
    setInput(oldInput => ({...oldInput, [unit]:newValue}));
  };

  function handleClick() {
setAnswer((input.grams/28.3495 + input.ounces) * 1923)
  }
  

  /* console.log("input",input) */

  /*const answer = input.grams + input.ounces*/


  /*useEffect(() => {
    axios
      .get(
        "https://api.metalpriceapi.com/v1/latest?api_key=1f791186eb0afbfd4b7c1b89efe2c461&base=USD&currencies=EUR,XAU,XAG"
      )
      .then((response) => {
        console.log(response.data.rates);
        setInfo(response.data);
      });
  }, []);

  if (info === undefined) {
    return "loading";
  } */

  return (
    <div className="App">
      <header className="App-header">
        <h1>Metals Project</h1>
        <div className="container">
          <div className="Gold">
            <p>Gold Price</p>
            {/*Math.floor(1 / info.rates.XAU)*/}
            1923
          </div>
          <div className="Silver">
            <p>Silver Price</p>
            {/*Math.floor(1 / info.rates.XAG)*/}
            23
          </div>
          <p>
            I have
            <input
              className="input"
              type="text"
              name="grams"
              onChange={handleInputChange('grams')}
            ></input>
            many grams of gold and
            <input
              className="input"
              type="text"
              name="ounces"
              onChange={handleInputChange('ounces')}
            ></input>
            ounces. I have $ worth of gold.
          </p>
        </div>
        <button onClick={handleClick}>Calculate</button>

      <p>${answer.toFixed(2)}</p>
      </header>
    </div>
  
  );
}

export default App;
