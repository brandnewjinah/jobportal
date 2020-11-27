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
      //   .get("https://restcountries.eu/rest/v2/all")
      .get("/data/data.json")
      .then((res) => {
        setData(res.data.title);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const newdata = data.map((c, idx) => c.label);
    if (selected.length > 0) {
      setFiltered(newdata.filter((data) => !selected.includes(data)));
    } else {
      setFiltered(newdata);
    }
  }, [selected, data]);

  const handleSelection = (n) => {
    setSelected([...selected, n]);
  };

  return (
    <div>
      <form>
        <input placeholder="Search Countries" />
      </form>
      <div>
        <ul>
          {data.map((title, idx) => (
            <li key={idx} onClick={() => handleSelection(title.label)}>
              {title.label}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>filtered</p>
        <ul>
          {filtered.map((title, idx) => (
            <li key={idx}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Suggested;
