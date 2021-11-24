import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BrasilAPI } from "./components/BrasilAPI"
import { ViaCEP } from "./components/ViaCEP"
import { Home } from "./components/Home"
import { Header } from "./components/Header";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/brasil-api" element={<BrasilAPI />} />
          <Route path="/via-cep" element={<ViaCEP />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
