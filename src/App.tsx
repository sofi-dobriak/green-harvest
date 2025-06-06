import { useMediaQuery } from 'react-responsive';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  return (
    <>
      <Container>
        <Header />
      </Container>
      {!isDesctop && <MobileMenu />}
    </>
  );
}

export default App;
