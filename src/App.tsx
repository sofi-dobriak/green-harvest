import { useMediaQuery } from 'react-responsive';
import './App.css';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';
import HeroScreen from './components/HeroScreen/HeroScreen';
import HowItWorksScreen from './components/HowItWorksScreen/HowItWorksScreen';
import Container from './components/Container/Container';
import Advertisement from './components/Advertisement/Advertisement';
import VegetableList from './components/VegetableList/VegetableList';

function App() {
  const isDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  return (
    <>
      <Header />

      <main>
        <Container>
          <HeroScreen />
          <HowItWorksScreen />
          <Advertisement />
          <VegetableList />
        </Container>
      </main>

      {!isDesktop && <MobileMenu />}
    </>
  );
}

export default App;
