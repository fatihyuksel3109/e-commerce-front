import React from "react";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0.5rem 0.75rem;
  font-family: "Poppins", sans-serif;
  transition: transform 0.3s ease; /* Add a smooth transition effect */
  &:hover {
    transform: scale(1.1); /* Scale up by 10% on hover */
  }
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
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
    ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;
    `}
    ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 1px solid #000;
    `}
${(props) =>
    props.primary &&
    css`
      background-color: #3b82f6;
      color: rgb(255 255 255);
      &:hover {
        background-color: #2563eb;
      }
    `}

    ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
