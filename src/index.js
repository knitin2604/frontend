import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Switch,BrowserRouter } from "react-router-dom";
import Signup from './components/Signup'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
     <App/>
    <Route exact path="/signup" component={Signup} />
  
  </Switch>
  </BrowserRouter>,
  rootElement
);