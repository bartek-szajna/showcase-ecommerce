import styled, { css } from 'styled-components';

export interface ButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

const Button = styled.button<ButtonProps>`
  box-sizing: content-box;
  background: none;
  border: none;
  outline: none;
  width: 2rem;
  height: 1.6rem;
  z-index: 10;
  padding: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover .line,
  &:focus .line {
    background-color: ${({ theme }) => theme.navbar.hoverColor};
  }

  @media (min-width: 768px) {
    display: none;
  }

  .line {
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.navbar.primaryColor};
    border-radius: 0.2rem;
    transition: transform 0.7s ease, opacity 0.5s ease;
  }

  ${(props) =>
    props.isMenuOpen &&
    css`
      .line--1 {
        transform: translateY(0.7rem) rotate(-45deg);
      }
      .line--2 {
        transform: translateX(100%);
        opacity: 0;
      }
      .line--3 {
        transform: translateY(-0.7rem) rotate(45deg);
      }
    `};
`;

export default Button;
