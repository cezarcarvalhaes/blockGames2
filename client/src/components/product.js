import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import logo from "../blockchain.svg";
import Card2 from "./Card/card2";
import API from "../API";
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
import products from "../products.json";


class Products extends React.Component {
 state= {
   games: []
 }
 componentDidMount() {
  API.getGames().then((res) => {
    console.log(res);
      this.setState({games: res.data})
    });
 }

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
          <div className="listings">
            <Card2 image={products[0].image} title={products[0].title} description={products[0].description} />
            <Card2 image={products[1].image} title={products[1].title} description={products[1].description} />
            <Card2 image = {products[2].image} title={products[2].title} description={products[2].description}/>
          </div>
        </div>
        <div>
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
                  <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/timothy-dolan-023682127/">
                    LinkedIn 
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="https://github.com/tdolan21/blockGames2">
                    Github 
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    sources 
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="https://international.bittrex.com/">
                    purchase BTC! 
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

export default Products;
