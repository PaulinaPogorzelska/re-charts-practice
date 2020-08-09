import React from "react";
import styled from "styled-components/macro";

const StyledInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${(props) => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

const Input = () => {
  return (
    <div>
      <StyledInput small placeholder="Small" />
      <StyledInput placeholder="Normal" />
      <StyledInput padding="2em" placeholder="Padded" />
      <p>lala</p>
    </div>
  );
};

export default Input;
