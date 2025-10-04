import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/home";
import About from './pages/about/about'
import Careers from './pages/careers/careers'
import Info from "./pages/info/info";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/info/:id" element={<Info/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
