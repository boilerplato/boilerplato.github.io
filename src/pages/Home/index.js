import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';
import imgLogo from '../../media/logo.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="home">
        <div className="content">
          <img className="app-logo" src={imgLogo} alt="Boilerplato Logo" width="128" height="128" />
          <h1 className="app-title">Boilerplato</h1>
          <p className="app-desc">A powerful tool to generate boilerplate source code from a template.</p>
          <div>
            <a href="https://github.com/boilerplato/boilerplato">GitHub</a>
            <a className="doc-button" href="https://docs.boilerplato.com/">Getting Started</a>
          </div>
        </div>
        <div className="footer">
          <a href="https://www.producthunt.com/posts/boilerplato?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-boilerplato" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=194128&theme=dark" alt="Boilerplato - A powerful tool to generate boilerplate source code easily | Product Hunt Embed" style={{ width: 250, height: 54 }} width="250px" height="54px" /></a>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
