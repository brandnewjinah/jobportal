import React, { ChangeEvent, FC, useState } from "react";

//import styles and assets
import styled from "styled-components";
import { Eye, EyeOff } from "../assets/Icons";

interface Props {
  error?: string;
  type?: string;
  value?: any;
  name?: string;
  prefix?: string;
  placeholder?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({
  error,
  type,
  value,
  name,
  prefix,
  placeholder,
  handleChange,
}) => {
  const [password, setPassword] = useState(true);
  const [focus, setFocus] = useState(false);

  const focusOutline = {
    borderColor: focus ? `blue` : `#e4e4e4`,
    transition: `all 0.20s ease-in-out`,
  };

  return (
    <Wrapper>
      <InputContainer style={focusOutline}>
        {prefix && <div>{prefix}</div>}
        <input
          className={error ? "input error" : "input"}
          type={type === "password" && password ? "password" : "text"}
          value={value}
          name={name}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={handleChange}
        />
        {type === "password" && (
          <Toggle onClick={() => setPassword(!password)}>
            {password ? (
              <Eye width="20" height="20" color="#000" stroke="1" />
            ) : (
              <EyeOff width="20" height="20" color="#000" stroke="1" />
            )}
          </Toggle>
        )}
      </InputContainer>
      {/* {error && <Error>{error}</Error>} */}

      <Error>{error}</Error>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1em 0;

  .error {
    border: 1px solid red;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-radius: 0.25em;
  padding: 0 1em;

  .input {
    width: 100%;
    flex: 1;
    border: transparent;
    outline: transparent;
    padding: 0.45em 0;
    margin: 0.5em 0;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
`;

const Toggle = styled.div`
  right: 0.75em;
  display: flex;
  margin-left: 1em;
`;

export default Input;
