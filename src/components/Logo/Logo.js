import logoM from '../.././assets/images/logoForMobile.png';
import logoL from '../.././assets/images/logoForLaptop.png';
import logoT from '../.././assets/images/logoForTablet.png';
 import {LogoImg} from './Logo.styled';
import {useIsMobile, useIsTablet} from '../../hooks/mediaQuery'
export const Logo = () => {
    const isMobileScreen = useIsMobile();
    const IsTabletScreen = useIsTablet();

    return (
      <div>
        <a href >
        {isMobileScreen&&<LogoImg src={logoM} alt="Logo" ></LogoImg>}
        {IsTabletScreen&&<LogoImg src={logoT} alt="Logo" ></LogoImg>}
        {!IsTabletScreen&&!isMobileScreen&&<LogoImg src={logoL} alt="Logo" ></LogoImg>}
        </a>
      </div>
    );
  };