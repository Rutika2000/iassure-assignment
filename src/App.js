import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Map from "./components/Map.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}

export default App;
