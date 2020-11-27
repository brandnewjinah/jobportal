import React, { useState, useEffect } from "react";
import axios from "axios";

const Suggested = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelection = (n) => {
    setSelected([...selected, n]);
    // setFiltered(data.name.filter((country) => !selected.includes(country)));
    const test = data.map((c, idx) => c.name);
    console.log(test.filter((c) => !selected.includes(c)));
  };

  return (
    <div>
      <form>
        <input placeholder="Search Countries" />
      </form>
      <div>
        <ul>
          {data.map((country, idx) => (
            <li key={idx} onClick={() => handleSelection(country.name)}>
              {country.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Filtered</p>
        <ul>
          {selected.map((country, idx) => (
            <li key={idx}>{country}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Suggested;
