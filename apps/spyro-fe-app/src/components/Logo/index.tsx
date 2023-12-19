import { LogoLink, LogoLinkIcon } from './styles';

const Logo: React.FC = () => {
  return (
    <h1 className='logo'>
      <LogoLink href='/'>
        <LogoLinkIcon iconName=''/>
        e-commerce
      </LogoLink>
    </h1>
  );
};

export default Logo;
