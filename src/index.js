import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import White from './components/White';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blue from './components/Blue';
import { Redirect } from 'react-router';
import { Switch } from 'react-router';
import Canvas from './components/canvas';
import CanvasPage from './components/CanvasPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Redirect exact from="/" to="/white" />
      <Route path="/canvas-page" component={CanvasPage} />
      <Route path="/white" component={White} />
      <Route path="/blue" component={Blue}/> 
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
  
);
reportWebVitals();
