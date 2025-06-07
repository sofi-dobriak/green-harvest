import { useMediaQuery } from 'react-responsive';
import './App.css';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import HeroScreen from './components/HeroScreen/HeroScreen';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <Header />
      <HeroScreen />
      {!isDesktop && <MobileMenu />}
    </>
  );
}

export default App;
