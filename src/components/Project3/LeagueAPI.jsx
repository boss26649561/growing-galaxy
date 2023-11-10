import { useState } from "react";
//import axios from axios;

function App() {
  const [searchText, setsearchText] = useState([]);
  const API_Key = "RGAPI-eb991661-5c0f-41c9-801d-533332a4b284";

  function searchForPlayer(event) {
    //api call
    var APICall =
      "https://oc1.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" +
      searchText +
      "?api_key=" +
      API_Key;
    //handle api call
  }

  return (
    <div className="App">
      <div className="container">
        <h5>Player searcher</h5>
        <input
          type="text"
          onChange={(e) => setsearchText(e.target.value)}
        ></input>
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
