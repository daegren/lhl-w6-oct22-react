import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav id="nav-bar">
        <img className="logo" src="/images/bird.png" />
        <span className="header">Tweeter</span>
        <ul>
          <li>
            <a href="#" className="btn-compose-tweet" title="Compose Tweet">
              <i className="fa fa-pencil-square-o" /> Compose
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
