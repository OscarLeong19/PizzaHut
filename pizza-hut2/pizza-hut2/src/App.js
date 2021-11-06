import "./App.css";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import LoginModal from "./components/modal/loginmodal";
import RegisModal from "./components/modal/registermodal";
import React, { useState } from "react";
import background from "./assets/backgroundimg.png";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`,
    }}>
      <Router>
        <Navbar
          setOpenModal={setOpenModal}
          setRegisterModal={setRegisterModal}
        />
        {/* <Carousel carousels={carouseldata} />
        <Pizza /> */}
        {openModal && <LoginModal setOpenModal={setOpenModal} />}
        {registerModal && <RegisModal setRegisterModal={setRegisterModal} />}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
