import Encabezado from "./encabezado";
import NavBar from "./NavBar"   
import Novedades from "./Novedades";
import Ofertas from "./Ofertas" 
import Credit from "./Credit";
import Redes from "./Redes";

import Info from "./Info";
function App() {
  return (
    <div >
       <header>
        <Encabezado/> 
        <NavBar />
       </header>
       <main>
<Novedades />
<Ofertas />

       </main>
       <footer>

<Credit />
<Redes /> 
<Info/>
       </footer>
    </div>
  );
}

export default App;
