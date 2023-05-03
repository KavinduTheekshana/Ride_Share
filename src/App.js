import React from 'react';
import { Apply, Header, Navbar } from './containers';
import './App.scss';

const App = () => (
  <div class="App">
   <div class="container">
   <Navbar/>
   <Header />
   <Apply/>
   </div>
  </div>
);

export default App;