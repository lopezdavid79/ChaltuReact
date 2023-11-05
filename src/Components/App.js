import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Encabezado from "./Encabezado/encabezado";
import NavBar from "./Nav/NavBar";
import QSomos from "./QSomos/QSomos";
import Credit from "./Credit";
import Redes from "./Redes/Redes";
import Info from "./Info";
import Productos from "./Productos/Productos";
import Contact from "./Contacto/Contact";
import LoginPage from "./LoginPage"
// import Cart from "./Cart";
import Admin from "./administrador/Admin" 
import "../App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
        <a href="#contenido" class="sr-only sr-only-focusable">Saltar al contenido principal</a>

          <Encabezado />
          <NavBar />
        </header>
        <main id="contenido">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home/>} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/products" element={<Productos />} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/quienessomos" element={<QSomos />} />
            <Route path="/login" element={<LoginPage />} />
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
