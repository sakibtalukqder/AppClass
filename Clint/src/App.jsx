import React from 'react';
import { Route, Routes } from "react-router-dom";
import Contract from './Component/Contract';
import Dashboard from './Component/Dashboard/Dashboard';
import Error from './Component/Error';
import Form from './Component/Form';
import Home from './Component/Home';
import About from './Component/Home/About';
import Footer from './Component/Shared/Footer';
import Navbar from './Component/Shared/Navbar';


const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>

      <Navbar />
      
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Form />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contract' element={<Contract />} />
        <Route path='*' element={<Error/>}/>

      </Routes>

      <Footer />


    </div>
  );
};

export default App;