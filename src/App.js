import { React } from 'react'
import { Header, About, Skills, Projects, ScrollToTop  } from './components'

const App = () => {

  return (
    <div className="App" >
         <Header />
         <About />
         <Skills />
         <Projects />
        <ScrollToTop />
    </div>  
  );
}

export default App