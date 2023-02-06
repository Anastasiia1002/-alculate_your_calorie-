import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css'

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: '#212121', fontWeight: 'bold' } : null;


export const AuthNav = () => {
  return (
    <div className={s.container} >
      <NavLink style={setActiveStyle} className={s.text}  to="/signin">
      SING IN
      </NavLink>
      <NavLink style={setActiveStyle} className={s.text} to="/registration">
      REGISTRATION
      </NavLink>
    
    </div>
  );
};