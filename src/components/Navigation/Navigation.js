import {UserNav} from '../UserNav/UserNav'
import {AuthNav} from '../AuthNav/AuthNav'



export const Navigation = () => {
    const  isLoggedIn  = false

    return (
      <div>
       {isLoggedIn ? <UserNav /> :  <AuthNav />}
      </div>
    );
  };