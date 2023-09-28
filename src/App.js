import { React } from 'react'
import { Navbar, About, Skills, Projects, Contact, DownloadResume, ScrollToTop, Footer } from './components'

const App = () => {

  return (
    <div className="App" >
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <DownloadResume />
      <ScrollToTop />
      <Footer />
    </div>  
  );
}

export default App