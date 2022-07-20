import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { CustomColors } from "../../constants";

const StyledInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 0.6em 16px;
  padding: 4px 0px 0px 16px;
`;

const Indicator = styled.div`
  width: 24px;
  height: 24px;
  /* background: #e6e6e6; */
  background: ${CustomColors.gray};
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 1px solid #757575;
  border-radius: 0.2em;

  ${StyledInput}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${StyledLabel}:hover & {
    background: #939bf4;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${StyledInput}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 8px;
    width: 20%;
    height: 70%;
    border: solid white;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-fill-mode: forwards;
  }
`;

export type CheckboxProps = {
  check: boolean;
  handleChecked: (event: React.MouseEvent<HTMLElement>) => void;
};

interface IndicatorProps {
  isChecked: boolean;
}

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <StyledLabel>
      Full Time Only
      <StyledInput
        type="checkbox"
        id="online"
        onChange={handleChecked}
        checked={checked}
      />
      <Indicator />
    </StyledLabel>
  );
};

export { Checkbox };
