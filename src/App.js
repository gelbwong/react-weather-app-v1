import "./App.css";
import Footer from "./Footer";
import Design from "./images/sample-designs.png";
import LeftDesign from "./images/Left-design.png";
import RightDesign from "./images/Right-design.png";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-4">
          <img
            src={LeftDesign}
            alt="Handrawn design for left of the title of page."
            className="img-fluid"
          />
        </div>
        <div className="col-4">
          <h1 className="city-title">Melbourne</h1>
          <h2 className="country-title">Australia</h2>
        </div>
        <div className="col-4">
          <img
            src={RightDesign}
            alt="Handrawn design for right of the title of page."
            className="img-fluid"
          />
        </div>
      </div>

      <form className="search-engine">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control search-bar"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn search-button" />
          </div>
        </div>
      </form>

      <div className="row current-weather-details">
        <div className="col-4">
          <img
            src={Design}
            alt="Simple mirrorred freehand design"
            className="img-fluid"
          />
        </div>
        <div className="col-4">
          <ul className="list-group list-group-flush current-weather">
            <li className="list-group-item">Temp: 5°C</li>
            <li className="list-group-item">Humidity: 5°C</li>
            <li className="list-group-item">Wind: 5°C</li>
            <li className="list-group-item">Percipitation: 5°C</li>
            <li className="list-group-item">Percipitation: 5°C</li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src={Design}
            alt="Simple mirrorred freehand design"
            className="img-fluid"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
