import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import CustomNavbar from '../Layout/Headers'; // Import the Navbar component
// import Home from './pages/Home';  // Import your page components
import Work from '../Pages/Work';
import Body from '../Layout/Body';
import Projects from '../Pages/Projects';

const Routing = ()=>  {
  return (
      <div style={{ paddingTop: '60px' }}> {/* Add padding to avoid content under the fixed Navbar */}
        <Routes>
          <Route path="/*" element={<Body />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
   
  );
}

export default Routing;
