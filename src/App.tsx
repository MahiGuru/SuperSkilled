import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const RequestQuote = lazy(() => import('./pages/Request-Quote'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quote">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/quote">
            <RequestQuote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
  </Router>
  );
}

export default App;
