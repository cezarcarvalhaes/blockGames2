import React, { Component } from "react";
import logo from "./blockchain.svg";
import Checkout from "./Checkout";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppRouter from "./AppRouter"
import {
  Button,
  Icon,
  Card,
  Col,
  CardTitle,
  Slider,
  Footer,
  Slide,
  Navbar,
  NavItem
} from "react-materialize";

class App extends Component {
  state={

  }

  
  
  render() {
    return (
      <div className="root">
      <main>
      
        <div className="App-header">
        <div className="svgs">

          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to blockGames</h2>
          </div>
        </div>
        <div className="intro">
          <h3>
           This is your destination for purchasing games with your blockchain based currencies!
          </h3>
        </div>
        <div className="card">
          <Slider>
            <Slide
              src="https://i.ytimg.com/vi/5Derwdk-rgA/maxresdefault.jpg"
              title="Blockchain marketplace for your digital game keys!"
              // height="580"
              // width="250"
            >
              Currently accepting BTC, future BCH and ETH integration.
            </Slide>
            <Slide
              src="http://fullcrackpc.com/wp-content/uploads/torn-tales-banner.jpg"
              title="Take a look around we have many indie games"
              placement="left"
            >
              We also strive to have the latest AAA titles!
            </Slide>
            <Slide
              src="https://steamcdn-a.akamaihd.net/steam/apps/727110/ss_d3cfabc7ea372581791bd8903dee80fc23f6f20a.1920x1080.jpg?t=1508397447"
              title="Developers please contact us!"
              placement="right"
            >
              We would love to host your game keys!
            </Slide>
          </Slider>
        </div>
        <p className="App-intro">
          <Checkout
            name={"The Road to learn React"}
            description={"Open Source React Book"}
            amount={1}
          />
        </p>
        </main>

        <Footer
          copyrights="blockGames Copyright 2019"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          }
          links={
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  LinkedIn (not complete)
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Github (not complete)
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  sources (not complete)
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  etc. (not complete)
                </a>
              </li>
            </ul>
          }
          className="example"
        >
          <h5 className="white-text">Contact us</h5>
          <p className="grey-text text-lighten-4">
            Developers please contact us if you would like to sell your games on
            our marketplace!
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
