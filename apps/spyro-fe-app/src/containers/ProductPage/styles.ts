import styled from 'styled-components';

export const ProductDetailsPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 500px;

  @media (min-width: 800px) {
    flex-direction: row;
    height: calc(100vh - 200px);
  }
  @media (min-width: 520px) {
  }
`;

export const ProductDetailsWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, 'sans-serif';
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  padding: 4rem;
  
  color: ${({ theme }) => theme.body.primaryColor};

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.body.secondaryColor};
  }
  p:first-of-type {
    font-size: 1rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;

    @media (min-width: 800px) {
      text-align: right;
    }
  }


  @media (min-width: 800px) {
    width: 50vw;
    max-width: 500px;
  }

  @media (min-width: 1200px) {
    padding-left: 6rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 250px;
  height: auto;
  margin: 15rem 0 0rem;
  object-fit: contain;

  @media (min-width: 800px) {
    margin: 0;
  }
`;
export const ButtonContentWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;



export const ButtonCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    max-width: 352px;
    min-width: 290px;
  }
`;