import {Logo} from '../Logo/Logo'
import {Navigation} from '../Navigation/Navigation'
import {Nav} from './Header.styled'



export const Header = () => {


    return (
      <Nav>
        <Logo/>
        <Navigation/>
      </Nav>
    );
  };

 