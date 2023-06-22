import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../component/Main';
import Slide1 from '../component/Slide1';
import Slide2 from '../component/Slide2';
import Slide21 from '../component/Slide21';
import Slide3 from '../component/Slide3';
import Slide4 from '../component/Slide4';
import Slide5 from '../component/Slide5';
import Slide6 from '../component/Slider6';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path='/slide1' element={<Slide1/>}/>
        <Route path="/slide2" element={<Slide2/>} />
        <Route path="/slide21" element={<Slide21/>} />
        <Route path="/slide3" element={<Slide3/>} />
        <Route path="/slide4" element={<Slide4/>} />
        <Route path="/slide5" element={<Slide5/>} />
        <Route path="/slide6" element={<Slide6/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;