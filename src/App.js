import './components/styles/App.scss';
import Navigation from './components/layouts/Navigation';
import Hero from './components/layouts/Hero';
import Pricing from './components/layouts/Pricing';
import Informations from './components/layouts/Informations';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Pricing/>
      <Informations/>
      <Footer/>
    </>
  );
}

export default App;
