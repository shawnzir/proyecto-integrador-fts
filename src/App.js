import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Favoritos from "./pages/Favoritos/Favoritos";
import NotFound from "./pages/NotFound/NotFound";
import Resultados from "./pages/Resultados/Resultados";
import DetallePelicula from "./pages/DetallePelicula/DetallePelicula"
import VerTodasPopulares from "./pages/VerTodasPopulares/VerTodasPopulares"
import VerTodasCartelera from "./pages/VerTodasCartelera/VerTodasCarteleras"

import "./App.css"

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/favoritos" component={Favoritos} />
      <Route path="/resultados/:valorBusqueda" component={Resultados} />
      <Route path="/pelicula/:id" component={DetallePelicula} />
      <Route path="/peliculas-populares" component={VerTodasPopulares} />
      <Route path="/peliculas-cartelera" component={VerTodasCartelera} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
