// import Header from 'components/Header/Header';
// import MobileHeader from 'components/Header/MobileHeader';
// import Footer from 'components/Footer';

import Wrapper from './Wrapper';
import { Suspense } from 'react';
import { LoadingScreen } from 'components/loading-screen';

// import useSetting from 'hooks/useSettings';
// import useResponsive from 'hooks/useResponsive';

// import Navbar from 'components/Navbar';
// import Marquee from 'components/marquee';
// import MobileMenu from 'components/MobileMenu';

const MainLayout = () => {
    // const isDesktop = useResponsive('up', 'sm');
    // const { navbar, onChangeNav } = useSetting();

    return (
        <Suspense fallback={<LoadingScreen />}>
            {/* {navbar === 'open' && !isDesktop && <Navbar openNav={navbar === 'open'} onCloseNav={onChangeNav} />}
            {isDesktop ? <Header /> : <MobileHeader />}
            <Marquee /> */}
            <Wrapper />
            {/* <Footer />
            <MobileMenu /> */}
        </Suspense>
    );
};

export default MainLayout;
