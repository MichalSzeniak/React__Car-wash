import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />

      {/* <Route path="/" render={() => <Home />} /> */}
      <Route path="/" render={() => <Contact />} />
    </Switch>
  );
};

export default Page;
