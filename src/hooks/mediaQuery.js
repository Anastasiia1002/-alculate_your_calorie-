import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => useMediaQuery({ maxWidth: 767.99 });
export const useIsTablet = () => useMediaQuery({ minWidth:768, maxWidth: 1279.98 });
