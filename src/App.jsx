import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Test } from "./Test";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;