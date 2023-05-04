import React from 'react';
import { Apply, Header, Navbar, Works } from './containers';
import './App.scss';

const App = () => (
  <div class="App">
   <div class="container">
   <Navbar/>
   <Header />
   <Apply/>
   <Works/>
   </div>
  </div>
);

export default App;