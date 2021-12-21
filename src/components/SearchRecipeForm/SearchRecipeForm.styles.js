import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  /* position: fixed; */
  margin: 40px 0 0 0;
  flex-direction: column;
  width: 90vw;
  min-width: 300px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.darkBlue};
  box-shadow: 0 0 5px black;

  @media (min-width: 670px) {
    width: 630px;
  }

  input,
  label,
  select,
  button {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  input,
  select {
    width: 80%;
    margin: 15px auto;
  }

  select {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  label {
    margin-bottom: 5px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xs};

    @media (min-width: 679px) {
      font-size: ${({ theme }) => theme.fontSizes.s};
    }
  }

  button {
    margin: 15px auto;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    transition: 0.3s ease-in-out;
    font-size: ${({ theme }) => theme.fontSizes.xs};

    @media (min-width: 679px) {
      font-size: ${({ theme }) => theme.fontSizes.s};
    }
  }

  button:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`;
