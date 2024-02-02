// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Pages from "./Components/Pages";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";


import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/pages" element={ <Pages/> } />
          <Route path="/shop" element={ <Shop/> } />
          <Route path="/blog" element={ <Blog/> } />
          <Route path="/footer" element={ <Footer/> } />
          <Route path="/contactus" element={ <Contact/> } />


      </Routes>
    </div>
  )
}

export default App;
      
