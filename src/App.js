import { React } from 'react'
import { Navbar, About, Skills, Projects, Contact, ScrollToTop, Footer  } from './components'

const App = () => {

  return (
    <div className="App" >
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>  
  );
}

export default App