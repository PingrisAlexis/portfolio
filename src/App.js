import { React } from 'react';
import { Header, About, Skills, Projects  } from './components';

const App = () => {

  return (

    <div className="App" >

         <Header />
         <About/>
         <Skills/>
         <Projects/>

    </div>  
  );
}

export default App;