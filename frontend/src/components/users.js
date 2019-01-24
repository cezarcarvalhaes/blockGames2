import React, { Component } from "react";
import logo from "../blockchain.svg";

import "../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import AppRouter from "../AppRouter";
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
  Row,
  Input,
  NavItem,
  
} from "react-materialize";
import Form from "./Form/form";

class Users extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="root">
          <div className="App-header">
            <div className="svgs">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Select a product to purchase!</h2>
            </div>
          </div>
          <div className="form">
            <Form />
          </div>
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
              Developers please contact us if you would like to sell your games
              on our marketplace!
            </p>
          </Footer>
        </div>
      </div>
    );
  }
}

export default Users;
