import { useMediaQuery } from 'react-responsive';
import './App.css';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import HeroScreen from './components/HeroScreen/HeroScreen';
import HowItWorksScreen from './components/HowItWorks/HowItWorks';
import Advertisement from './components/Advertisement/Advertisement';
import VegetableList from './components/VegetableList/VegetableList';
import ReviewsList from './components/ReviewsList/ReviewsList';

function App() {
  const isDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <Header />

      <main>
        <HeroScreen />
        <HowItWorksScreen />
        <Advertisement />
        <VegetableList />
        <ReviewsList />
      </main>

      {!isDesktop && <MobileMenu />}
    </>
  );
}

export default App;
