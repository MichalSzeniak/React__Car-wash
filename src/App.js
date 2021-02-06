import './components/styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
import Hero from './components/layouts/Hero';
import Pricing from './components/layouts/Pricing';
import Informations from './components/layouts/Informations';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Hero />
      <Pricing />
      <Informations />
      <Footer />
    </Router>
  );
}

export default App;
