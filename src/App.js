import "./App.css";
import Footer from "./Footer";
import Design from "./images/sample-designs.png";
import LeftDesign from "./images/Left-design.png";
import RightDesign from "./images/Right-design.png";

function App() {
  return (
    <div className="App container">
      <div className="row mt-4">
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
          <div className="col-10 search-bar-div">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control search-bar"
            />
          </div>
          <div className="col-2 search-button-div">
            <input type="submit" value="Search" className="btn search-button" />
          </div>
        </div>
      </form>

      <div className="row current-date ">
        <div className="col-6 text-start date-time">Thursday 1:00 pm</div>
        <div className="col-6 text-end weather-description">Mostly Cloudy</div>
      </div>

      <div className="row current-weather-details">
        <div className="col-4">
          <img
            src={Design}
            alt="Simple mirrorred freehand design"
            className="img-fluid current-weather-decoration"
          />
        </div>

        <div className="col-4">
          <ul className="list-group list-group-flush current-weather">
            <li className="list-group-item text-start">Temp: 5°C</li>
            <li className="list-group-item text-end">Humidity: 5%</li>
            <li className="list-group-item text-start">Wind: 5 km/hr</li>
            <li className="list-group-item text-end">Percipitation: 5%</li>
            <li className="list-group-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png"
                alt="Cloud weather icon"
                className="img-fluid"
                width="70px"
              />
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src={Design}
            alt="Simple mirrorred freehand design"
            className="img-fluid current-weather-decoration"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
