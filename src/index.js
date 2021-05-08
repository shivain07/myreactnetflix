import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Todo from './Todo';
import NavR from './NavR';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
<>
<BrowserRouter>
  <NavR/>
  </BrowserRouter>
    </>
,
  document.getElementById('root')
);


