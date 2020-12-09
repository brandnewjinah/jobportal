import React, { ChangeEvent, FC } from "react";

//import styles and assets
import styled from "styled-components";
import { ArrowRight, ArrowLeft } from "../assets/Icons";

interface Props {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  imp?: string;
  direction?: number;
  handleToggle?: () => void;
}

export const Selector: FC<Props> = ({
  label,
  type,
  value,
  name,
  imp,
  direction,
  handleToggle,
}) => {
  return (
    <>
      {direction === 2 ? (
        <Right
          style={{ backgroundColor: imp === "primary" ? "#f2665c" : "#f2665c" }}
          onClick={handleToggle}
        >
          {label}
        </Right>
      ) : (
        <Left onClick={handleToggle}>{label}</Left>
      )}
    </>
  );
};

const Common = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.15s linear;
  &:hover {
    opacity: 0.8;
  }
`;

const Left = styled(Common)`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #dddddd;
`;

const Right = styled(Common)`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
