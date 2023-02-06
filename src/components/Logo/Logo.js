import logoM from '../.././assets/images/logoForMobile.png';
import logoL from '../.././assets/images/logoForLaptop.png';
import logoT from '../.././assets/images/logoForTablet.png';
 import s from './Logo.module.css';
import {useIsMobile, useIsTablet} from '../../hooks/mediaQuery'
export const Logo = () => {
    const isMobileScreen = useIsMobile();
    const IsTabletScreen = useIsTablet();

    return (
      <div>
        
        {isMobileScreen&&<img className={s.logoImg} src={logoM} alt="Logo" />}
        {IsTabletScreen&&<img className={s.logoImg}src={logoT} alt="Logo" />}
        {!IsTabletScreen&&!isMobileScreen&&<img className={s.logoImg}src={logoL} alt="Logo" />}
        
      </div>
    );
  };