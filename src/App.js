import './App.css';
import React from 'react';
import { Navbar, Footer, Welcome, About } from './components';

const App = () => {
  return (
    <div>
      
      <div className='container'>
      <Navbar/>
        <section className='App-starterpage'>
          <Welcome />
        </section>
        <section className='App-about'>
          <About/>
        </section>
        <Footer/>
      </div>
    </div>

  )
}

export default App;
