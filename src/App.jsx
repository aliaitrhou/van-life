import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Emoji from "./assets/vanEmogiImg.png";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="h-full bg-orange-50 font-sans flex flex-col items-center ">
        <BrowserRouter>
          <header className="fixed bg-orange-100 shadow-md  p-6 sm:p-8 w-full flex justify-center ">
            <div className="max-w-4xl w-full">
              <nav className="flex flex-row justify-between items-center">
                <Link to={"/"}>
                  <div className="relative">
                    <img
                      className="absolute w-7 h-7 rotate-45 -top-3 -right-4"
                      src={Emoji}
                    />
                    <p className="uppercase font-extrabold text-black text-xl sm:text-2xl hover:underline">
                      #vanlife
                    </p>
                  </div>
                </Link>
                <Link
                  to={"/about"}
                  className="hover:underline font-semibold  text-light "
                >
                  About
                </Link>
              </nav>
            </div>
          </header>
          <main className="mt-24 w-full flex flex-col items-center">
            <div className="max-w-4xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
