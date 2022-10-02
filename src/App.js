
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

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
