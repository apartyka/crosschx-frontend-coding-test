var React = require('react');
var ReactDOM = require('react-dom');


class App extends React.Component {
  render() {
    return(
      <div>
        <header>
          <nav className="navbar navbar-default" role="navigation">
            <div className="container">
              <div className="page-header">
              </div>
            </div>
          </nav>
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
