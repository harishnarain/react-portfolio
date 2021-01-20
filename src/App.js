import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './containers/Contact/Contact';

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={Home} />
      <Redirect to="/"></Redirect>
    </Switch>
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default App;
