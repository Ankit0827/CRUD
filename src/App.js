import "./App.css";
// import ReactDOM from 'react-dom';
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Navbar1 from "./Component/Navbar/Navbar1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pagenotfound from "./Component/Pages/Pagenotfound";
import Adduser from "./Component/user/Adduser";
import Edit from "./Component/user/Edit";


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar1 />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="/Adduser" element={<Adduser />}></Route>
            <Route exact path="/user/Edit/:id" element={<Edit />}></Route>
            <Route exact path="*" element={<Pagenotfound />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
