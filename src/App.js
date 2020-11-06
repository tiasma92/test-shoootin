import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState({});
  search = async () => {
    const result = await axios(`https://swapi.dev/api/people/?search=${name}`);
    if (result.data.results.length > 1) {
      setPeople({});
    } else {
      setPeople(result.data.results[0]);
    }
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button type="submit" onClick={this.search}>
        submit
      </button>
      <p>Name: {people.name}</p>
      <p>Height: {people.height ? people.height + "cm" : ""}</p>
      <p>Mass: {people.mass ? people.mass + "kg" : ""}</p>
    </div>
  );
}
