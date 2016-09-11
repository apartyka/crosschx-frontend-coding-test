var React = require('react');
var ReactDOM = require('react-dom');

var Search = require('./Search');
var UtilityNav = require('./UtilityNav');
var MainNav = require('./MainNav');

class App extends React.Component {
  render() {
    return(
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-4">
                <UtilityNav />
                <MainNav />
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="offset-container col-lg-4">
              <Search />
              <div className="map-container">
                <div className="items">
                  <h1>Cardiology and Cardiac Surgery</h1>
                  <h4>Oxford General Medical Center - Main</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              stuff
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
