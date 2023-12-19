import styled from 'styled-components';

export const Select = styled.select`
  min-width: 8rem;
  margin-left: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  border-color: ${({ theme }) => theme.body.secondaryColor};
  color: ${({ theme }) => theme.body.secondaryColor};
  background-color: ${({ theme }) => theme.body.background};
`;