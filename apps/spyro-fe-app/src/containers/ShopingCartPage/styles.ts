import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const ComponentWrapper = styled.div`
  padding: 2rem;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  color: ${({ theme }) => theme.body.primaryColor};
  @media (max-width: 765px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  margin: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1100px){
    flex-direction: row;
    align-items: flex-start;
    max-width: 1000px;
    margin: 4rem auto;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  

  @media (min-width: 1100px) {
    // max-width: 700px;
  }

  & > * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.body.primaryColor};
  font-size: 2.4rem;
  font-weight: 800;
  // margin-bottom: 4rem;

  @media (min-width: 1200px) {
    font-size: 2.8rem;
  }
`;

export const ProductCardOverlay = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  width: 34px;
  height: 34px;
  align-items: center;
  position: absolute;
  top: 3%;
  left: calc(97% - 34px);
  bottom: 0;
  right: 0;
  background-color: #181818;
  z-index: 1;
  border-radius: 50%;
  &:hover {
    opacity: 100%;
    transform: scale(1.1);
  }
  transition: transform 0.5s;
  img {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 16px;
    width: 14px;
  }
`;

export const IconImage = styled.img`
  display: flex;
  height: 3.2rem;
  width: 3.2rem;
  object-fit: cover;
  object-position: ${({ theme }) => (theme.lightMode ? 'bottom' : 'top')};
`;

export const Info = styled.p`
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: normal;
  color: ${({ theme }) => theme.body.primaryColor};

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;
