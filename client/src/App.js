import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Navbar />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
      <Footer />
    </Router>
  );
}


export default App;
