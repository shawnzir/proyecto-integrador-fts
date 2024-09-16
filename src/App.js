import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Favoritos from "./pages/Favoritos/Favoritos";
import NotFound from "./pages/NotFound/NotFound";
import Resultados from "./pages/Resultados/Resultados";
import DetallePelicula from "./pages/DetallePelicula/DetallePelicula"
import Peliculas from "./pages/Peliculas/Peliculas";

function App() {
  return (
    <Routes>
      <Route exact={true} path="/" element={<Home/>} />
      <Route path="/favoritos" element={<Favoritos/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/resultados" element={<Resultados/>} />
      <Route path="/pelicula/:id" element={<DetallePelicula/>} />
      <Route path="/peliculas" element={<Peliculas/>} />
    </Routes>
  );
}

export default App;
