import './App.css';
import React from 'react';
import { Navbar, Footer, Welcome, About } from './components';
import { particlesCursor } from 'threejs-toys'
const App = () => {

  particlesCursor({
    el: document.getElementById('app'),
    gpgpuSize: 256,
    colors: [0x00ff00, 0x0000ff],
    color: 0xff0000,
    coordScale: 1.5,
    noiseIntensity: 0.001,
    noiseTimeCoef: 0.0001,
    pointSize: 5,
    pointDecay: 0.005,
    sleepRadiusX: 250,
    sleepRadiusY: 250,
    sleepTimeCoefX: 0.001,
    sleepTimeCoefY: 0.002
  })

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
