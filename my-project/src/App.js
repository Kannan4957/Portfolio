import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './About/About';
import Experience from './Experience/Experience';
import Project from './project/Project';
import Footer from './Fotter/Footer';

const App = () => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
