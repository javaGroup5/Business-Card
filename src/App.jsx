import "./App.css";
import Info from "./components/info";
import About from "./components/About.jsx";
import Interest from "./components/Interest.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
