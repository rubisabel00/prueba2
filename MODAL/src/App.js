

import Primercontenedor from "./Componentes/contenedores/Primercontenedor";
import Segundocontenedor from "./Componentes/contenedores/Segundocontenedor";
import Tercercontenedor from "./Componentes/contenedores/Tercercontenedor";
import { Ventana } from "./Componentes/contenedores/Ventana";
import { Ventana2 } from "./Componentes/contenedores/Ventana2";

import Footer from "./Componentes/Footer/Footer";
import MenuUno from "./Componentes/menu/MenuUno";


function App() {
  return (
    <div className="App">
     <div>
       <div> 
       <img className="rounded mx-auto d-block" src={process.env.PUBLIC_URL + 'imagenes/logo.png'} alt="" />  
        </div>
     </div>
<MenuUno/>
      <main className="mt-10">
          <Primercontenedor/>
          <Segundocontenedor/>
          <Tercercontenedor />
         
          
              
      </main>
      
      <Footer />
     
    </div>
  );
}

export default App;
