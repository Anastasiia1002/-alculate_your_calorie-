import {Header} from './Header/Header'
 import { MainPage } from '../pages/MainPage/MainPage';

import {LoginPage} from '../pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <div >
     
      <Header/>
      {/* <MainPage/> */}
      <LoginPage />
    </div>
  );
};
