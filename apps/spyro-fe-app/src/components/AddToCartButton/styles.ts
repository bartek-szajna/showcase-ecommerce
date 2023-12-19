import styled from 'styled-components';

const AddToCartButton = styled.button`
  flex-grow: 1;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.body.primaryColor};
  color: ${({ theme }) => theme.body.background};
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  border: none;
  transition: 50ms;
  cursor: pointer;
  border-radius: 1rem;
  &:active {
    transform: scale(0.98);
  }

  &:hover {
    color: red;
  }

  &:hover {
    color: ${({ theme }) => theme.navbar.hoverColor};

    img {
      object-position: center;
    }
  }

  img {
    height: 3.2rem;
    width: 3.2rem;
    margin-left: 1rem;
    object-fit: cover;
    object-position: ${({ theme }) => (theme.lightMode ? 'bottom' : 'top')};
  }

  span {
    flex: 1;
    font-size: 1.5rem;
  }
`;

export default AddToCartButton;
