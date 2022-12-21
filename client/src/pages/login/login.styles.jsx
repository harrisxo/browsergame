import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 50rem;
  @media (max-width: 600px) {
    width: 45rem;
  }
  margin: 8rem auto;
  gap: 2rem;
  h1 {
    font-size: 2.6rem;
  }
  a {
    font-size: 1.6rem;
    &:active {
      color: #3f3f3f;
    }
  }
`;

export const AuthForm = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  input[type="submit"] {
    font-size: 1.8rem;
    background-color: #fafafa;
    outline: none;
    border: 1px solid #3f3f3f;
    padding: 0.5rem;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      background-color: #3f3f3f;
      color: #fafafa;
    }
  }
`;

export const AuthInput = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    font-size: 2rem;
  }
  input {
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    font-size: 1.8rem;
    background-color: transparent;
    padding: 0.5rem;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }
  }
`;
