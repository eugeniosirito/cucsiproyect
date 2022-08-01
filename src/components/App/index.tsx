import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Asesino from 'screens/ListaClases/Asesino';
import Atributos from 'screens/Atributos';
import Clases from 'screens/Clases';
import Contact from 'screens/Contact';
import Galeria from 'screens/Galeria';
import Home from 'screens/Home';
import Login from 'screens/LogIn';
import Manual from 'screens/Manual';
import RankingPage from 'screens/RankingPage';
import Razas from 'screens/Razas';
import Reglamento from 'screens/Reglamento';
import Signup from 'screens/Signup';
import Bandido from 'screens/ListaClases/Bandido';
import Staff from 'screens/Staff';
import 'scss/application.scss';
import Bardo from 'screens/ListaClases/Bardo';
import Cazador from 'screens/ListaClases/Cazador';
import Clerigo from 'screens/ListaClases/Clerigo';
import Druida from 'screens/ListaClases/Druida';
import Guerrero from 'screens/ListaClases/Guerrero';
import Ladron from 'screens/ListaClases/Ladron';
import Mago from 'screens/ListaClases/Mago';
import Paladin from 'screens/ListaClases/Paladin';
import Pirata from 'screens/ListaClases/Pirata';
import Trabajador from 'screens/ListaClases/Trabajador';
import Arghal from 'screens/ListaHechizos/Arghal';
import Banderbill from 'screens/ListaHechizos/Banderbill';
import Lindos from 'screens/ListaHechizos/Lindos';
import Nix from 'screens/ListaHechizos/Nix';
import NuevaEsperanza from 'screens/ListaHechizos/NuevaEsperanza';
import Terminus from 'screens/ListaHechizos/Terminus';
import Ullathorpe from 'screens/ListaHechizos/Ullathorpe';
import Unicos from 'screens/ListaHechizos/Unicos';
import Hechizos2 from 'screens/Hechizos2';
import Criaturas from 'screens/Criaturas';
import Altamar from 'screens/Listacriaturas/Altamar';
import Castillo from 'screens/Listacriaturas/Castillo';
import Catacumbas from 'screens/Listacriaturas/Catacumbas';
import Cementerio from 'screens/Listacriaturas/Cementerio';
import Dinframundo from 'screens/Listacriaturas/Dinframundo';
import Dragon from 'screens/Listacriaturas/Dragon';
import Elfico from 'screens/Listacriaturas/Elfico';
import Hierro from 'screens/Listacriaturas/Hierro';
import Oro from 'screens/Listacriaturas/Oro';
import Plata from 'screens/Listacriaturas/Plata';
import Laberinto from 'screens/Listacriaturas/Laberinto';
import Lana from 'screens/Listacriaturas/Lana';
import Inframundo from 'screens/Listacriaturas/Inframundo';
import Mara from 'screens/Listacriaturas/Mara';
import Marabel from 'screens/Listacriaturas/Marabel';
import Mausoleo from 'screens/Listacriaturas/Mausoleo';
import Mundoabierto from 'screens/Listacriaturas/Mundoabierto';
import Newbie from 'screens/Listacriaturas/Nwdungeon';
import Polo from 'screens/Listacriaturas/Polo';
import Verill from 'screens/Listacriaturas/Verill';
import Trabajos from 'screens/Trabajos';
import Tala from 'screens/Listatrabajos/Tala';
import Carpinteria from 'screens/Listatrabajos/Carpinteria';
import Botanica from 'screens/Listatrabajos/Botanica';
import Pesca from 'screens/Listatrabajos/Pesca';
import Alquimia from 'screens/Listatrabajos/Alquimia';
import Mineria from 'screens/Listatrabajos/Mineria';
import Fragua from 'screens/Listatrabajos/Fragua';
import Herreria from 'screens/Listatrabajos/Herreria';
import Esquila from 'screens/Listatrabajos/Esquila';
import Hilado from 'screens/Listatrabajos/Hilado';
import Sastreria from 'screens/Listatrabajos/Sastreria';
import ArmadurasAltos from 'screens/Listaitems/ArmaduraAltos';
import ArmadurasBajos from 'screens/Listaitems/ArmaduraBajos';
import Armas from 'screens/Listaitems/Armas';
import Escudos from 'screens/Listaitems/Escudos';
import Tunicas from 'screens/Listaitems/Tunicas';
import Mapas from 'screens/Mapas';
import Items from 'screens/Items';
import Exp from 'screens/Exp';
import Clanes from 'screens/Clanes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reglamento" element={<Reglamento />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/manual/razas" element={<Razas />} />
        <Route path="/manual/atributos" element={<Atributos />} />
        <Route path="/manual/clases" element={<Clases />} />
        <Route path="/manual/hechizos" element={<Hechizos2 />} />
        <Route path="/manual/criaturas" element={<Criaturas />} />
        <Route path="/manual/trabajos" element={<Trabajos />} />
        <Route path="/manual/clases/asesino" element={<Asesino />} />
        <Route path="/manual/clases/bandido" element={<Bandido />} />
        <Route path="/manual/clases/bardo" element={<Bardo />} />
        <Route path="/manual/clases/cazador" element={<Cazador />} />
        <Route path="/manual/clases/clerigo" element={<Clerigo />} />
        <Route path="/manual/clases/druida" element={<Druida />} />
        <Route path="/manual/clases/guerrero" element={<Guerrero />} />
        <Route path="/manual/clases/ladron" element={<Ladron />} />
        <Route path="/manual/clases/mago" element={<Mago />} />
        <Route path="/manual/clases/paladin" element={<Paladin />} />
        <Route path="/manual/clases/pirata" element={<Pirata />} />
        <Route path="/manual/clases/trabajador" element={<Trabajador />} />
        <Route path="/manual/hechizos/arghal" element={<Arghal />} />
        <Route path="/manual/hechizos/banderbill" element={<Banderbill />} />
        <Route path="/manual/hechizos/lindos" element={<Lindos />} />
        <Route path="/manual/hechizos/nix" element={<Nix />} />
        <Route path="/manual/hechizos/nuevaesperanza" element={<NuevaEsperanza />} />
        <Route path="/manual/hechizos/terminus" element={<Terminus />} />
        <Route path="/manual/hechizos/ullathorpe" element={<Ullathorpe />} />
        <Route path="/manual/hechizos/unicos" element={<Unicos />} />
        <Route path="/manual/criaturas/altamar" element={<Altamar />} />
        <Route path="/manual/criaturas/castillo" element={<Castillo />} />
        <Route path="/manual/criaturas/catacumbas" element={<Catacumbas />} />
        <Route path="/manual/criaturas/cementerio" element={<Cementerio />} />
        <Route path="/manual/criaturas/dinframundo" element={<Dinframundo />} />
        <Route path="/manual/criaturas/dragon" element={<Dragon />} />
        <Route path="/manual/criaturas/elfico" element={<Elfico />} />
        <Route path="/manual/criaturas/hierro" element={<Hierro />} />
        <Route path="/manual/criaturas/oro" element={<Oro />} />
        <Route path="/manual/criaturas/plata" element={<Plata />} />
        <Route path="/manual/criaturas/laberinto" element={<Laberinto />} />
        <Route path="/manual/criaturas/lana" element={<Lana />} />
        <Route path="/manual/criaturas/inframundo" element={<Inframundo />} />
        <Route path="/manual/criaturas/mara" element={<Mara />} />
        <Route path="/manual/criaturas/marabel" element={<Marabel />} />
        <Route path="/manual/criaturas/mausoleo" element={<Mausoleo />} />
        <Route path="/manual/criaturas/mundoabierto" element={<Mundoabierto />} />
        <Route path="/manual/criaturas/newbie" element={<Newbie />} />
        <Route path="/manual/criaturas/polo" element={<Polo />} />
        <Route path="/manual/criaturas/verill" element={<Verill />} />
        <Route path="/manual/trabajos/tala" element={<Tala />} />
        <Route path="/manual/trabajos/pesca" element={<Pesca />} />
        <Route path="/manual/trabajos/carpinteria" element={<Carpinteria />} />
        <Route path="/manual/trabajos/botanica" element={<Botanica />} />
        <Route path="/manual/trabajos/alquimia" element={<Alquimia />} />
        <Route path="/manual/trabajos/mineria" element={<Mineria />} />
        <Route path="/manual/trabajos/fragua" element={<Fragua />} />
        <Route path="/manual/trabajos/herreria" element={<Herreria />} />
        <Route path="/manual/trabajos/esquila" element={<Esquila />} />
        <Route path="/manual/trabajos/hilado" element={<Hilado />} />
        <Route path="/manual/trabajos/sastreria" element={<Sastreria />} />
        <Route path="/manual/trabajos/herreria/armadurasaltos" element={<ArmadurasAltos />} />
        <Route path="/manual/trabajos/herreria/armadurasbajos" element={<ArmadurasBajos />} />
        <Route path="/manual/trabajos/herreria/armas" element={<Armas />} />
        <Route path="/manual/trabajos/herreria/escudos" element={<Escudos />} />
        <Route path="/manual/trabajos/sastreria/tunicas" element={<Tunicas />} />
        <Route path="/manual/mapas" element={<Mapas />} />
        <Route path="/manual/items" element={<Items />} />
        <Route path="/manual/exp" element={<Exp />} />
        <Route path="/manual/clanes" element={<Clanes />} />
      </Routes>
    </Router>
  );
}

export default App;
