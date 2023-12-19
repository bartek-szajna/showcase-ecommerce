import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const ComponentWrapper = styled.div`
  padding: 2rem 4rem;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  color: ${({ theme }) => theme.body.primaryColor};
  @media (max-width: 765px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  @media (max-width: 600px) {
    position: static;
    margin-top: 2rem;
  }
`;