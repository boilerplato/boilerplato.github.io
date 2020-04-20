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
            <a href="https://github.com/boilerplato/boilerplato" target="_blank">GitHub</a>
            <a className="doc-button" href="https://docs.boilerplato.com/" target="_blank">Getting Started</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
