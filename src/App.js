import { React } from 'react'
import { Navbar, About, Skills, Projects, Contact, ScrollToTop  } from './components'

const App = () => {

  return (
    <div className="App" >
         <Navbar />
         <About />
         <Skills />
         <Projects />
         <Contact />
        <ScrollToTop />
    </div>  
  );
}

export default App