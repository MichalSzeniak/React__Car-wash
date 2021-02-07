import './components/styles/App.scss';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer';
import Page from './components/layouts/Page';

function App() {
  return (
    <Router basename="/">
      <Navigation />
      <Page />
      <Footer />
    </Router>
  );
}

export default App;
