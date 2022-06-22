import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import PageB from './PageB/PageB';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='pageb' element={<PageB />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
