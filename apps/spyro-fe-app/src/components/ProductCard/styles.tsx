import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 5px;
  padding: 1rem;
  transition: 150ms;

  &:hover {
    transform: scale(1.01);
    box-shadow:0 4px 8px 0 rgba(0,0,0,0.15);
    box-shadow:0 4px 8px 0 ${({ theme }) => theme.lightMode ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,1)"};
  }
`;


export const ProductImageWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const ProductImage = styled.img`
  width: 75%;
  height: 75%;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const ProductDetailsWrapper = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  & > *:first-child {
    font-size: calc(1.1rem + 0.2vw);
    color: ${({ theme }) => theme.body.primaryColor};
  }

  & > *:nth-child(2) {
    font-size: calc(1rem + 0.2vw);
    color: ${({ theme }) => theme.body.primaryColor};
  }
`;
export const PriceWrapper = styled.div`
  overflow-wrap: break-word;
  white-space: nowrap;
`;
