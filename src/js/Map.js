var React = require('react');


class Map extends React.Component {
  render() {
    return(
      <div className="map-container">
        <div className="items">
          <h1>Cardiology and Cardiac Surgery</h1>
          <h4>Oxford General Medical Center - Main</h4>
          <nav className="clearfix">
            <p className="navbar-text pull-left">
              <a href="#" className="navbar-link">
                Add to Watch List <span className="caret"></span>
              </a>
            </p>
            <p className="navbar-text pull-right">
              <a href="#" className="navbar-link">
                Share profile
              </a>
            </p>
          </nav>
          <ul className="list-inline stats">
            <li>
              <span className="number">14k</span>
              <span className="type">Visits</span>
            </li>
            <li>
              <span className="number">75</span>
              <span className="type">Physicians</span>
            </li>
            <li>
              <span className="number">10k</span>
              <span className="type">Complaints</span>
            </li>
            <li>
              <span className="number">11k</span>
              <span className="type">Diagnosis</span>
            </li>
          </ul>
        </div>
        <section className="map">
          <img src="/images/map-fpo.jpg" className="img-responsive" alt="Fpo Google Map" />
          <nav className="clearfix">
            <p className="navbar-text pull-left">
              <a href="#" className="navbar-link">
                <img src="/images/map-icon.jpg" alt="Go to Map" height="25" width="20" /> Go to Map
              </a>
            </p>
            <p className="navbar-text pull-right">
              <a href="#" className="navbar-link">
                <img src="/images/constellation-icon.jpg" alt="Go to Constellation" height="25" width="20" /> Go to Constellation
              </a>
            </p>
          </nav>
        </section>
      </div>
    );
  }
}

module.exports = Map;
