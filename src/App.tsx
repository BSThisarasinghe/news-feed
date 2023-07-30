import React, { useEffect, useState } from 'react';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import RouteHandler from './routes/RouteHandler';

function App() {
  return (
    <React.Fragment>
      <Router>
        <RouteHandler />
      </Router>
    </React.Fragment>
  );
}

export default App;
