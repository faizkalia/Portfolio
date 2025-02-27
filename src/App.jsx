import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./RoutesComp/Home";
import About from "./RoutesComp/About"
import Project from "./RoutesComp/Project"
import Contact from "./RoutesComp/Contact"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
      
    </>
  );
}

export default App;
