import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import MessagePage from './pages/MessagePage';

const App = () => {
  return (
    <Router>
      <div className="px-20">
        <Navbar />

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/message/:id" component={MessagePage} exact />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
