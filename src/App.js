import './App.css';
import React from 'react';
import { Navbar, Footer, Welcome, About } from './components';

const App = () => {
  return (
    <div>
      <div className='container'>
        <section className='App-navbar'>
          <div className='bg-blur'>
            <Navbar />
          </div>
        </section>
        <section className='App-starterpage'>
          <Welcome />
        </section>
        <section className='App-about'>
          <About />
        </section>
        <section className='App-footer'>
          <Footer />
        </section>
      </div>
    </div>

  )
}

export default App;
