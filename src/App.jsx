import Nav from "./components/Nav";
import { BrowserRouter, Routes ,Route } from "react-router-dom";

import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Nav />
    <Routes>
      <Route path="/"  element={ <Home /> } /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App
