import React, { useState } from "react";

//import styles and assets
import styled from "styled-components";
import { BtnArrow } from "../../components/Button";
import { Check } from "../../assets/Icons";

const QuizPresenter = (props) => {
  const quiz = props.quiz && props.quiz;
  const name = quiz && quiz.name;
  const [profile, setProfile] = useState({
    goal: [],
  });

  const handleSelection = (option) => {
    let newOption = [...profile[name]];

    let duplicate = newOption.find((item) => item.id === option.id);

    if (duplicate) {
      newOption = newOption.filter((f) => f.id !== option.id);
    } else {
      newOption = [...profile[name], option];
    }

    setProfile({ ...profile, [name]: newOption });
  };

  return (
    <Wrapper>
      <Header>
        <h4>{quiz && quiz.header}</h4>
        <p>{quiz && quiz.sub}</p>
      </Header>
      <Section>
        {quiz &&
          quiz.selections.map((option, idx) => (
            <Selection key={idx} onClick={() => handleSelection(option)}>
              {profile[name].find((f) => f.id === option.id) && (
                <div>
                  <Check width="20" height="20" color="#000" stroke="2" />
                </div>
              )}
              {option.title}
            </Selection>
          ))}
      </Section>
      <Buttons>
        <BtnArrow direction="left" />
        <BtnArrow direction="right" />
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 3em auto;
`;

const Header = styled.div`
  text-align: center;

  p {
    margin: 1em 0;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2em 0;
`;

const Selection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  width: 20em;
  padding: 2em 4em;
  text-align: center;
  margin: 1em 0;
  cursor: pointer;
  transition: all 0.09s linear;

  &:hover {
    transform: scale(1.02);
  }

  div {
    display: flex;
    align-items: center;
    margin: 0 1em;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em 0;

  button {
    margin: 0 1.5em;
  }
`;

export default QuizPresenter;
