import { useState, useEffect, useContext } from 'react';
import {
  ButtonsWrapper,
  ButtonQuantity,
  CartButton,
  ThemeButton,
} from './styles';
import { CartQuantityContext } from '../UserDataContext/UserDataContext';

interface NavButtonsProps {
  isDarkMode: boolean;
  themeHandler: () => void;
}

const NavButtons:React.FC<NavButtonsProps> = ({ isDarkMode, themeHandler }) => {
  const [labelsVisibility, setLabelsVisibility] = useState(false);
  const { cartQuantity } = useContext(CartQuantityContext);

  const toggleLabelsVisibility = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setLabelsVisibility(true);
    } else {
      setLabelsVisibility(false);
    }
  };

  useEffect(() => {
    const mediaQueryObject = window.matchMedia('(min-width: 950px)');

    if (mediaQueryObject.matches) {
      setLabelsVisibility(true);
    }

    mediaQueryObject.addEventListener('change', toggleLabelsVisibility);

    return () => {
      mediaQueryObject.removeEventListener('change', toggleLabelsVisibility);
    };
  }, []);

  return (
    <ButtonsWrapper>
      <CartButton
        // activeClassName='activeLink'
        className={({ isActive }) => "" + (isActive ? " activeLink" : "")}
        to='/cart'
      >
        {cartQuantity > 0 ? (
          <ButtonQuantity>{cartQuantity}</ButtonQuantity>
        ) : null}

        <span className={labelsVisibility ? '' : 'sr-only'}>Your cart</span>
      </CartButton>
      <ThemeButton onClick={themeHandler}>
        <span className={labelsVisibility ? '' : 'sr-only'}>
          {isDarkMode ? 'Light' : 'Dark'} mode
        </span>
      </ThemeButton>
    </ButtonsWrapper>
  );
};

export default NavButtons;
