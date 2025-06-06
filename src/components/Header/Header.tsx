import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../MobileHeader/MobileHeader';
import TabletHeader from '../TabletHeader/TabletHeader';
import DesktopHeader from '../DesktopHeader/DesktopHeader';

const Header = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: 767 });
  const isTablet: boolean = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      {isMobile && <MobileHeader />}
      {isTablet && <TabletHeader />}
      {isDesktop && <DesktopHeader />}
    </>
  );
};

export default Header;
