import React, { FC } from "react";

//import styles and assets
import styled from "styled-components";
import { BtnArrow } from "../../components/Button";

interface Props {}

const StepOne: FC<Props> = () => {
  return (
    <Wrapper>
      <Header>
        <h4>What is your goal?</h4>
        <p>Select all that apply.</p>
      </Header>
      <Section>
        <div>Lose weight</div>
        <div>Get Healthy</div>
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
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;

  p {
    margin: 1em 0;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
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
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StepOne;
