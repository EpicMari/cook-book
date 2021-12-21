import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 2;

  top: 80px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  background: ${({ theme }) => theme.colors.lightBlue};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  transition: 1s 1s ease-in-out;

  h3 {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
