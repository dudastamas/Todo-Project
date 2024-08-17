import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

const App = () => {
  return(
    <div className='flex'>
      <Sidebar  />
      <Content />
    </div>
    
  )

};

export default App;
