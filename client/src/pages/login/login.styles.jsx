import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50rem;
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
  form ul {
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
    li {
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
      }
    }
  }
`;
