import { useEffect, useContext } from 'react';
import { List, NavLinkWrapper, LinkIcon } from './styles';
import { NavLink } from 'react-router-dom';
import { NameContext } from '../UserDataContext/UserDataContext';

export interface NavListProps {
  isMenuOpen: boolean;
  handleClick: () => void;
}

const NavList: React.FC<NavListProps> = ({ isMenuOpen, handleClick }) => {
  const { name, setNameHandler } = useContext(NameContext);

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setNameHandler(`${name}`);
    }
  }, [setNameHandler]);

  let responseToRender:JSX.Element | JSX.Element[];
    responseToRender = ["home", "categories", "profile"].map((item:string) => (
      <li key={item}>
        <NavLink
          to={item === "home" ? "/" : item}
          onClick={handleClick}
          className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
          <NavLinkWrapper>
            <LinkIcon className='activeLinkIcon' iconName={item} />
            {item !== 'profile' ? "" : name ? name + "'s " : ''}
            {item}
          </NavLinkWrapper>
        </NavLink>
      </li>
    ));
  // }

  return <List isMenuOpen={isMenuOpen}>{responseToRender}</List>;
};

export default NavList;
