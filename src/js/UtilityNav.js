var React = require('react');


class UtilityNav extends React.Component {
  render() {
    return(
      <div className="utility">
        <a className="menu" title="Another Menu"></a>
        <a className="alerts" title="App alerts"></a>
      </div>
    );
  }
}

module.exports = UtilityNav;
