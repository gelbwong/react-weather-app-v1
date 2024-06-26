import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Melbourne</h1>
        <h2>Australia</h2>
        <div className="row">
          <div className="col-4">
            <img
              src="src/sample-designs.png"
              alt="Simple mirrorred freehand design"
            />
          </div>
          <div className="col-4">
            <ul>
              <li>Temp: 5°C</li>
              <li>Humidity: 5°C</li>
              <li>Wind: 5°C</li>
              <li>Percipitation: 5°C</li>
            </ul>
          </div>
          <div className="col-4">
            <img
              src="src/sample-designs.png"
              alt="Simple mirrorred freehand design"
            />
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
