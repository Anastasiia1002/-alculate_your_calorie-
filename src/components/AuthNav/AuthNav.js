import { NavLink } from 'react-router-dom';


const setActiveStyle = ({ isActive }) =>
  isActive ? { color: 'rgb(239, 131, 230)', fontWeight: 'bold' } : null;


export const AuthNav = () => {
  return (
    <div >
      <NavLink style={setActiveStyle}  to="/signin">
      Sign in
      </NavLink>
      <NavLink style={setActiveStyle}  to="/registration">
      Registration
      </NavLink>
    
    </div>
  );
};