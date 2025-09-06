import { useMediaQuery } from 'react-responsive';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import HeroScreen from './components/HeroScreen/HeroScreen';
import HowItWorksScreen from './components/HowItWorks/HowItWorks';
import Advertisement from './components/Advertisement/Advertisement';
import VegetableList from './components/VegetableList/VegetableList';
import ReviewsList from './components/ReviewsList/ReviewsList';
import YourOrder from './components/YourOrder/YourOrder';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import BackToTop from './components/BackToTop/BackToTop';
import InfoMessage from './components/InfoMessage/InfoMessage';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const isDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 250,
    });
  }, []);

  return (
    <>
      <Header />

      <main>
        <HeroScreen />
        <HowItWorksScreen />
        <Advertisement />
        <VegetableList />
        <ReviewsList />
        <YourOrder />
      </main>

      <Footer />

      {!isDesktop && <MobileMenu />}
      <Modal />
      <BackToTop />
      <InfoMessage />
    </>
  );
}

export default App;
