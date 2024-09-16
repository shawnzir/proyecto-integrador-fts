import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";
import Resultados from "./pages/Resultados";
import DetallePelicula from "./pages/DetallePelicula"
import Peliculas from "./pages/Peliculas";

function App() {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/resultados" element={<Resultados />} />
      <Route path="/pelicula/:id" element={<DetallePelicula />} />
      <Route path="/peliculas" element={<Peliculas />} />
    </Routes>
  );
}

export default App;
