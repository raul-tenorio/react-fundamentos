
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Login from "./layout/Login";
import ActualizarVideojuego from "./paginas/ActualizarVideojuego";
import FormularioLogin from "./paginas/FormularioLogin";
import LandingPage from "./paginas/LandingPage";
import ListarVideojuegos from "./paginas/ListarVideojuegos";
import MostrarVideojuego from "./paginas/MostrarVideojuego";
import NuevoVideojuego from "./paginas/NuevoVideojuego";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin/>}/>
        </Route>

        <Route path="/videojuegos" element={<Dashboard />}>
        <Route index element={<ListarVideojuegos/>}/>
          <Route path='detalle/:id' element={<MostrarVideojuego/>}/>
          <Route path='nuevo' element={<NuevoVideojuego/>}/>
          <Route path='editar/:id' element={<ActualizarVideojuego/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
