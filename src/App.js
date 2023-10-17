
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Websiteform from "./Websiteform";
import Growthform from "./Growthform";
import Brandingform from "./Brandingform";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from './Content.js'

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/growthform" element={<Growthform />}></Route>
        <Route path="/websiteform" element={<Websiteform />}></Route>
        <Route path="/brandingform" element={<Brandingform />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/content" element={<Content />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
