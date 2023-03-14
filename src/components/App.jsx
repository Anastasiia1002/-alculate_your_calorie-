import {Header} from './Header/Header'
 import { MainPage } from '../pages/MainPage/MainPage';

import {LoginPage} from '../pages/LoginPage/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
export const App = () => {
  return (
    <div >
     
      <Header/>
      {/* <MainPage/> */}
      {/* <LoginPage /> */}
      <RegistrationPage/>
    </div>
  );
};
