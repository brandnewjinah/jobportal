import React, { useState } from "react";

//redux
import { connect } from "react-redux";

//import styles and assets
import styled from "styled-components";

const HomePresenter = (props) => {
  console.log(props.health_goal);
  return (
    <Wrapper>
      <Header>
        <h2>My Home</h2>
      </Header>
      <Analyser>
        <h4>
          My goal is to{" "}
          {props.health_goal.map((g, idx, arr) => {
            if (arr.length - 1 === idx) {
              return (
                <>
                  and <span key={idx}>{g.title}</span>.
                </>
              );
            } else {
              return (
                <>
                  <span key={idx}>{g.title}</span>,{" "}
                </>
              );
            }
          })}
        </h4>
      </Analyser>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 3em auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.8rem;
    font-weight: 500;
  }
`;

const Analyser = styled.div`
  margin: 2em auto;
  width: 100%;
  max-width: 960px;
  text-align: center;

  h4 {
    font-size: 1.5rem;
    line-height: 2.8rem;
    letter-spacing: 0.125rem;
    margin: 1.5em 0;
    text-rendering: optimizeLegibility;
  }

  span {
    /* border-bottom: 3px solid #e89161; */
    position: relative;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 3px solid #e89161;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    health_goal: state.health_goal,
    height: state.height,
    weight: state.weight,
    goal_weight: state.goal_weight,
  };
};

export default connect(mapStateToProps, null)(HomePresenter);
