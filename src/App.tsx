import { useMediaQuery } from 'react-responsive';
import './App.css';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import HeroScreen from './components/HeroScreen/HeroScreen';
import AboutScreen from './components/AboutScreen/AboutScreen';
import Container from './components/Container/Container';
import Discount from './components/Discount/Discount';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <Header />

      <main>
        <Container>
          <HeroScreen />
          <AboutScreen />
        </Container>
        <Discount />
      </main>

      {!isDesktop && <MobileMenu />}
    </>
  );
}

export default App;
