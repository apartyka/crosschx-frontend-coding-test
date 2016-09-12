var React = require('react');


class Search extends React.Component {
  render() {
    return(
      <div className="search">
        <div className="input-group">
          <input className="form-control" placeholder="Search for anything" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"></button>
          </span>
        </div>
      </div>
    );
  }
}

module.exports = Search;
