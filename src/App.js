import React from 'react';
import {BrowserRouter as Router, createRoutesFromChildren, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import BookRoom from './BookRoom';
import About from './About';
import Pricelist from './Pricelist';
import Product from './Product';
import Blog from './Blog';

const App = () => {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/Product" element={<Product />} />
            <Route path="/Pricelist" element={<Pricelist />} />
            <Route path="/About" element={<About />} />
            <Route path="/BookRoom" element={<BookRoom />} />
            <Route path="/Blog" element={<Blog />} />

          </Routes>
        </div>
      </Router>
  );
};

export default App;

