import React, { useState } from "react";

//import styles and assets
import styled from "styled-components";
import { BtnArrow } from "../../components/Button";
import { Check } from "../../assets/Icons";
import Input from "../../components/Input";
import { Selector } from "../../components/Selector";

const QuizPresenter = (props) => {
  const quiz = props.quiz && props.quiz;
  const page = props.quiz && props.quiz.page;
  const name = quiz && quiz.name;
  const [profile, setProfile] = useState({
    health_goal: [],
    measurement: {},
  });

  const handleSelection = (option) => {
    let newOption = [...profile[name]]; //health_goal clone
    let duplicate = newOption.find((item) => item.id === option.id);

    if (duplicate) {
      newOption = newOption.filter((f) => f.id !== option.id);
    } else {
      newOption = [...profile[name], option];
    }

    setProfile({ ...profile, [name]: newOption });
  };

  const handleChange = ({ currentTarget: input }) => {
    const userInput = { ...profile[name] };
    userInput[input.name] = { value: input.value };
    setProfile({ ...profile, [name]: userInput });
  };

  const handleToggle = (a, b) => {
    let newPro = { ...profile[name] }; //measurement clone
    const newOb = { ...newPro, [a]: { unit: b } }; //measurement, add
    setProfile({ ...profile, [name]: { ...newOb } });
  };

  const handleNext = () => {
    props.handleNext();
  };

  const handlePrev = () => {
    props.handlePrev();
  };

  return (
    <Wrapper>
      <Header>
        <h4>{quiz && quiz.header}</h4>
        <p>{quiz && quiz.sub}</p>
      </Header>

      {quiz && quiz.type === "selection" && (
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
      )}

      {quiz && quiz.type === "input" && (
        <Section>
          {quiz &&
            quiz.selections.map((option, idx) => (
              <Flex key={idx}>
                <div style={{ marginRight: `1em` }}>
                  <Input
                    placeholder={option.label}
                    type="text"
                    name={option.name}
                    handleChange={handleChange}
                  />
                </div>
                <Flex>
                  {option.options &&
                    option.options.map((o, idx) => (
                      <Selector
                        key={idx}
                        label={o.label}
                        direction={o.id}
                        selected={
                          profile[name] &&
                          profile[name][option.name] &&
                          profile[name][option.name].unit === o.label
                            ? true
                            : false
                        }
                        handleToggle={() => handleToggle(option.name, o.label)}
                      />
                    ))}
                </Flex>
              </Flex>
            ))}
        </Section>
      )}
      <Buttons>
        {page !== 1 && <BtnArrow direction="left" handleClick={handlePrev} />}
        <BtnArrow direction="right" handleClick={handleNext} />
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 3em auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
