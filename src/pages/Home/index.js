import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="home">
        Home page 5
        <p>
          Lorem Ipsum
        </p>
      </div>
    );
  }
}

export default withRouter(Home);
