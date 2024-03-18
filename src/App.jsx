import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Layout from "./components/Layout";
import "./server";

function App() {
  return (
    <div className="h-full bg-orange-50 font-sans flex flex-col items-center ">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
