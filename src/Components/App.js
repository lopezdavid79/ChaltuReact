import Encabezado from "./encabezado";
import NavBar from "./NavBar"   
import CarruselNovedades  from "./CarruselNovedades";
import Ofertas from "./Ofertas" 
import Credit from "./Credit";
import Redes from "./Redes";

import Info from "./Info";
function App() {
  return (
    <div  className="container">
       <header>
        <Encabezado/> 
        <NavBar />
       </header>
       <main>
<CarruselNovedades/>
<Ofertas />

       </main>
       <footer className="container">

<Credit />
<Redes /> 
<Info/>
       </footer>
    </div>
  );
}

export default App;
