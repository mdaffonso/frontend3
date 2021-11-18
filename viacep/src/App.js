import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrasilAPI } from "./components/BrasilAPI"
import { ViaCEP } from "./components/ViaCEP"
import { Home } from "./components/Home"
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/brasil-api" element={<BrasilAPI />} />
          <Route path="/via-cep" element={<ViaCEP />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
