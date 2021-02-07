import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />

      <Route path="/services" render={() => <Services />} />
      <Route path="/contact" render={() => <Contact />} />
    </Switch>
  );
};

export default Page;
