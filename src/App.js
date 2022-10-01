
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';

import HomePage from './Components/HomePage';
import Login from './Pages/Login';
import Allrouter from './Components/Allrouter';



function App() {
  return (
    <div className="App">
     
      {/* <HomePage/>
      <Footer/> */}
      <ChakraProvider>
      <Allrouter/>
     

      </ChakraProvider>
   
      
    </div>
  );
}

export default App;
