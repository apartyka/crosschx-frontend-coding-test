var React = require('react');


class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content clearfix">
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">2015 <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <div className="row">
          <div className="col-lg-12">
            <section className="main-content__block">
              <h3 className="main-content__heading">
                Visits
              </h3>
            </section>
            <section className="main-content__block">
              <h3 className="main-content__heading">
                Insurance
              </h3>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MainContent;
