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
                Share profile <span className="caret"></span>
              </a>
            </p>
          </nav>
          <ul className="list-inline stats">
            <li>
              14k<br />
              <span>Visits</span>
            </li>
            <li>
              75<br />
              <span>Physicians</span>
            </li>
            <li>
              10k<br />
              <span>Complaints</span>
            </li>
            <li>
              11k<br />
              <span>Diagnosis</span>
            </li>
          </ul>
          <section className="map">
            <img src="/images/map-fpo.jpg" className="img-responsive" alt="Fpo Google Map" />
          </section>
        </div>
      </div>
    );
  }
}

module.exports = Map;
