import {UserNav} from '../UserNav/UserNav'
import {AuthNav} from '../AuthNav/AuthNav'



export const Navigation = () => {
    const  isLoggedIn  = true

    return (
      <div>
       {isLoggedIn ? <UserNav /> :  <AuthNav />}
      </div>
    );
  };