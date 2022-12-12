
import {LinkNav} from './UserNav.styled';

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: 'rgb(239, 131, 230)', fontWeight: 'bold' } : null;


export const UserNav = () => {
  return (
    <div >
      <LinkNav style={setActiveStyle}  to="/diary">  
      Diary  
      </LinkNav>
      <LinkNav style={setActiveStyle}  to="/calculator">
      Calculator
      </LinkNav>
    
    </div>
  );
};