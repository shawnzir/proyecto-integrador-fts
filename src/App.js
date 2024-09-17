import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Favoritos from "./pages/Favoritos/Favoritos";
import NotFound from "./pages/NotFound/NotFound";
import Resultados from "./pages/Resultados/Resultados";
import DetallePelicula from "./pages/DetallePelicula/DetallePelicula"
import Peliculas from "./pages/Peliculas/Peliculas";
import "./App.css"

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/favoritos" component={Favoritos} />
      <Route path="/resultados/:valorBusqueda" component={Resultados} />
      <Route path="/pelicula/:id" component={DetallePelicula} />
      <Route path="/peliculas" component={Peliculas} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
