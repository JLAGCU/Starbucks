import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';


// Define the main App component.
const App = () => {
  return (
    // The Router component wraps the entire application to enable client-side routing.
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/add" component={AddProductPage} />
        <Route path="/edit/:id" component={EditProductPage} />
      </Switch>
    </Router>
  );
};

export default App;
