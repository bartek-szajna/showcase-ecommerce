
import styled from 'styled-components';

import homeIcons from '../../assets/icons/homeIcons.svg';
import categoriesIcons from '../../assets/icons/categoriesIcons.svg';
import profileIcons from '../../assets/icons/profileIcons.svg';

export interface ListProps {
  isMenuOpen: boolean;
}

export const List = styled.ul<ListProps>`
  top: 0;
  left: 0;
  transform: ${(props) => {
    return props.isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
  }};
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  transition: transform 0.8s ease-in-out;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 5;
  background-color: ${({ theme }) => theme.navbar.background};
  font-weight: 500;
  font-size: 2rem;
  list-style: none;
  color: ${({ theme }) => theme.navbar.secondaryColor};
  font-family: 'Poppins', 'sans-serif';
  align-items: center;

  @media (min-width: 768px) {
    position: static;
    width: unset;
    height: unset;
    font-size: 1.4rem;
    flex-direction: unset;
    transform: unset;
    transition: unset;
  }

  @media (min-width: 950px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  outline: none;
  margin-right: 1rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.navbar.hoverColor};
  }

  &:hover div,
  &:focus div {
    background-position-x: right;
  }

  @media (min-width: 950px) {
    margin-right: 3rem;
  }

  @media (min-width: 1200px) {
    margin-right: 6rem;
  }
`;

export interface LinkIconProps {
  iconName: string;
}

export const LinkIcon = styled.div<LinkIconProps>`
  width: 3.5rem;
  height: 3.5rem;
  background-position-y: center;
  background-position-x: left;
  background-size: 200% 300%;
  background-image: url(${(props) => {
    switch (props.iconName) {
      case 'home': {
        return homeIcons;
      }
      case 'categories': {
        return categoriesIcons;
      }
      default: {
        return profileIcons;
      }
    }
  }});

  @media (min-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
  @media (min-width: 950px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;