import React from 'react';
import { Apply, Benefits, Footer, Header, Navbar, Works } from './containers';
import './App.scss';

const App = () => (
  <div class="App">
   <div class="container">
   <Navbar/>
   <Header />
   <Apply/>
   <Works/>
   <Benefits/>
   </div>
   <Footer/>
  </div>
);

export default App;