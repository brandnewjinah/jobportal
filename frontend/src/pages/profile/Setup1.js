import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

import { colourOptions } from "../../data/data";

//import styles and assets
import styled from "styled-components";

const Setup1 = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const token = localStorage.getItem("token");
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get("http://localhost:5000/user/current", options)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Wrapper>
      <Header>
        <h4>Welcome, {user.name}</h4>
        <p>Fill out your profile for a match</p>
        <Select
          defaultValue={[]}
          isMulti
          name="colors"
          options={colourOptions}
        />
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 4em;
  background-color: yellow;
`;

const Header = styled.div`
  text-align: center;
`;

export default Setup1;
