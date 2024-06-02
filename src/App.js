import { React, useEffect } from 'react'
import { Navbar, About, Skills, Projects, Contact, Resume, ScrollToTop, Footer } from './components'

const App = () => { 
  
  useEffect(() => {
    const preloadImage = (url) => {
        const img = new Image();
        img.src = url;
    };
    preloadImage(require('./assets/dark_theme.png'));
}, []);

  return (
    <div className="App" >
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Resume />
      {/* <Contact /> */}
      <ScrollToTop />
      <Footer />
    </div>  
  );
}

export default App