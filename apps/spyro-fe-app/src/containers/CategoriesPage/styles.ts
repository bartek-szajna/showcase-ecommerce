import styled from 'styled-components';
import { displayCardAnimation } from '../../styles';

export const Title = styled.h1`
  color: ${({ theme }) => theme.body.primaryColor}};
  font-size: 3rem;
`;

export const ComponentWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  padding: 2rem 4rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  & > * {
    animation: ${displayCardAnimation} 250ms ease-out;
  }
`;
