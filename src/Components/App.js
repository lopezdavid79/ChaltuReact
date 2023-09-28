import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Encabezado from "./encabezado";
import NavBar from "./NavBar";
import QSomos from "./QSomos"
import Credit from "./Credit";
import Redes from "./Redes";
import Info from "./Info";
import Productos from "./Productos";
import Contact from "./Contact"


function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <a href="#content">Ir al contenido principal</a>
          <Encabezado />
          <NavBar />
        </header>
        <main id="content">
          <Routes>
          <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/productos" element={<Productos/>}/>
      <Route path="/qsomos" element={<QSomos/>}/>

          </Routes>
        </main>
        <footer className="container">
          <Credit />
          <Redes />
          <Info />
        </footer>
      </div>
    </Router>
  );
}

export default App;
