import React from 'react';

import 'font-awesome/css/font-awesome.min.css'
import './App.scss';

// Router Component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound';

import Home from './pages/Home';
import Header from './global/Header';
import Footer from './global/Footer';


function App() {
  return (
    <div id="NewsPaperApp" className="site">
      <Header/>
      <div className="page-wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} push={true}  />

            {/*  404 page if no page found */}
            <Route component={NotFound} />
          </Switch>
        </Router>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
