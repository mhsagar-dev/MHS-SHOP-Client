import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import AddProcuts from './components/AddProducts/AddProcuts';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Confirmation/Confirmation';
import AllProducts from './components/AllProducts/AllProducts';
import MyOrder from './components/MyOrders/MyOrder';
import AdminController from './components/AdminController/AdminController';
import ProductsManager from './components/ProductsManager/ProductsManager';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/admin'>
            <AdminController></AdminController>
          </PrivateRoute>
          <PrivateRoute path='/addYourProducts'>
            <AdminController></AdminController>
            <AddProcuts></AddProcuts>
          </PrivateRoute>
          <PrivateRoute path='/allOrders'>
            <AdminController></AdminController>
            <ProductsManager></ProductsManager>
          </PrivateRoute>
          <PrivateRoute path='/allOrders'>
            <ProductsManager></ProductsManager>
          </PrivateRoute>
          <PrivateRoute path='/confirmation/:id'>
            <Confirmation></Confirmation>
          </PrivateRoute>
          <PrivateRoute path="/allProducts">
            <AllProducts />
          </PrivateRoute>
          <PrivateRoute path='/checkout'>
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path='/order'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
