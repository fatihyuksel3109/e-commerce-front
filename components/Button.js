import React from "react";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 1.2rem;
  padding: 0.5rem .75rem;
  svg {
    margin: 0 8px 0 0;
    height: 1.4rem;
  }
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline === 1 &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
${(props) =>
    props.primary &&
    css`
      background-color: rgb(59 130 246);
      color: rgb(255 255 255);
    `}
  `;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
