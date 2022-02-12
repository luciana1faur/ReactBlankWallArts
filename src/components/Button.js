import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-size: 23px;
  color: var(--mainGreen);
  background: transparent;
  border: 0.2rem solid var(--mainWhite);
  border-radius: 0.5rem;
  font-family: 'Oswald', sans-serif;
  padding: 0.2rem 0.5 rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainGreen);
    color: var(--mainBlack);
  }
  &:focus {
    outline: none;
  }
`
