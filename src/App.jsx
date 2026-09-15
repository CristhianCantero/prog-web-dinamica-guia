import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollArriba from "./componentes/ScrollArriba";
import Inicio from "./paginas/Inicio";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import NavBar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Clase1 from "./paginas/clases/Clase1";
import Clase2 from "./paginas/clases/Clase2";
import Clase3 from "./paginas/clases/Clase3";
import Clase4 from "./paginas/clases/Clase4";
import Clase5 from "./paginas/clases/Clase5";
import Clase6 from "./paginas/clases/Clase6";
import Clase7 from "./paginas/clases/Clase7";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollArriba />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/clase-1" element={<Clase1 />} />
            <Route path="/clase-2" element={<Clase2 />} />
            <Route path="/clase-3" element={<Clase3 />} />
            <Route path="/clase-4" element={<Clase4 />} />
            <Route path="/clase-5" element={<Clase5 />} />
            <Route path="/clase-6" element={<Clase6 />} />
            <Route path="/clase-7" element={<Clase7 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
