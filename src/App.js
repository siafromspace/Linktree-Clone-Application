import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
