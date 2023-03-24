import './App.css';
import React from 'react';
import { Navbar, Footer, Welcome, About } from './components';
import { particlesCursor } from 'threejs-toys'
const App = () => {


  return (
      <div className='container' id='app'>
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

  )
}

export default App;
