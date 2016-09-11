var React = require('react');
var ReactDOM = require('react-dom');

var MainNav = require('./MainNav');

class App extends React.Component {
  render() {
    return(
      <div>
        <header className="foo">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-4">
                <div className="utility">
                  <a className="menu" title="Another Menu"></a>
                  <a className="alerts" title="App alerts"></a>
                </div>
                <MainNav />
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="map-container col-lg-4">
              <div className="items">
                <h1>Cardiology and Cardiac Surgery</h1>
                <h4>Oxford General Medical Center - Main</h4>
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
