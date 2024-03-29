import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import "./App.css"
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
