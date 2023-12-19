import styled from 'styled-components';


export const CategoryCardWrapper = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 1rem; 
  transition: 150ms;

  &:hover {
    transform: scale(1.01);
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.15);
    box-shadow:0 4px 8px 0 ${({ theme }) => theme.lightMode ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,1)"};
  }
`;

export const CategoryImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
  margin: 1rem 0;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.body.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1.5rem;
  text-align: center;
`;

