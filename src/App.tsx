import React from 'react';
import DashBoard from './components/DashBoard';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className='flex justify-center bg-gradient-to-b from-purple-black via-purple-transition to-black max-w-screen min-h-screen relative'>
        <DashBoard/>
      </div>
    </ChakraProvider>
    
  );
}

export default App;
