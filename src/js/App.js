var React = require('react');
var ReactDOM = require('react-dom');

var Search = require('./Search');
var UtilityNav = require('./UtilityNav');
var MainNav = require('./MainNav');
var Map = require('./Map');
var MainContent = require('./MainContent');

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
              <Map />
            </div>
            <div className="col-lg-8">
              <MainContent />
            </div>
          </div>
          <a className="app-nav__back visible-lg-inline-block">
            <span>Back</span>
          </a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
