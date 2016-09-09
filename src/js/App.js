var React = require('react');
var ReactDOM = require('react-dom');

var MainNav = require('./MainNav');

class App extends React.Component {
  render() {
    return(
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-4">
                <MainNav />
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <h1>Hello World!</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
