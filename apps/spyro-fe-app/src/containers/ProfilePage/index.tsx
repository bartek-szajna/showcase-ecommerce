import { useContext } from 'react';
import { Hello, Info } from './styles';
import {
  ComponentWrapper,
  LogoutButton,
  LogoutButtonIcon,
} from '../LoginPage/styles';
import { NameContext } from '../../components/UserDataContext/UserDataContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const infoData =
    "We would be grateful if you left some feedback on our FB to make our developer's life harder :)";
  const { name, setNameHandler } = useContext(NameContext);

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    setNameHandler('');
    navigate("/login", {replace:true});
  };

  return (
    <ComponentWrapper>
      <Hello>
        Hello,
        <br />
        <span>
          {` ${localStorage.getItem('name') || ''} ${
            localStorage.getItem('lastname') || ''
          }!`}
        </span>
      </Hello>
      <Info>{infoData}</Info>

      <LogoutButton onClick={logoutHandler}>
        <LogoutButtonIcon />
        Sign out
      </LogoutButton>
    </ComponentWrapper>
  );
};

export default ProfilePage;
