import './components/styles/App.scss';
import Navigation from './components/layouts/Navigation';
import Hero from './components/layouts/Hero';
import Pricing from './components/layouts/Pricing';
import Informations from './components/layouts/Informations';

function App() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Pricing/>
      <Informations/>
    </>
  );
}

export default App;
