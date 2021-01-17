import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Portfolio from './containers/Portfolio/Portfolio';

const App = (props) => {
  let routes = (
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
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
