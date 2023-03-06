import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  //query API
  const [location, setlocation] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  console.log(process.env.REACT_APP_CITY_KEY);

  //function to retrieve location data
  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${searchQuery}&format=json`;
    const res = await axios.get(API);
    console.log(res.data[0]);
    setlocation(res.data[0]);
  }
  function handleSearch(e) {
    setSearchQuery(e.target.value);
    //event is the input, target, the event being targetted. value is the data
  }
  return (
    <div className="App">
      {location.display_name && (
        <p>
          {location.display_name} Is at lat and lon: {location.lat} /
          {location.lon}
        </p>
      )}
      <input onChange={handleSearch} placeholder="Search for a city" />
      <button onClick={getLocation}>Get Data</button>
    </div>
  );
}

export default App;
