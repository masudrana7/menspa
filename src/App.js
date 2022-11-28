import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages Components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallary from "./pages/Gallary";
import Services from "./pages/Services";
import Single from "./pages/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallary" element={<Gallary />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/single" element={<Single />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
