import './App.css';
import React from 'react';
import products from './products.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "test",
      name: "test",
      blend: "test",
      taste: "test"
    }
  }
  hamburgerFunction = () => {
    document.getElementById("hamburgerMenuArea").style.display = "block"
  }
  displayProduct = (product) => {
    this.setState({
      type: product.type,
      name: product.name,
      blend: product.blend,
      taste: product.taste
    })
  }

  render() {

    window.onclick = (event) => {
      if (event.target === document.getElementById("hamburgerMenuArea")) {
        document.getElementById("hamburgerMenuArea").style.display= "none"
      }
    }

  return (
    <div className="wrapper">
      <div id="header">
      <div id="hamburgerDiv">
        <i id="hamburger" className="fa fa-bars" onClick={this.hamburgerFunction}></i>
        </div>
      <div id="hamburgerMenuArea">
        <div id="hamburgerMenu">
          <ul id="menuList">
            <li className="menuItem">About Us</li>
            <li className="menuItem">Coffee</li>
            <li className="menuItem">Tea</li>
            <li className="menuItem">Contact Us</li>
          </ul>
        </div>
      </div>
      <h1 id="title">Beans & Leaves</h1>
      <span id="subTitle">Your local source for fine coffee and tea!</span>
      <div id="bar"></div>
      </div>
      <div id="content">
      <p className="text">At Beans & Leaves, we strive to bring you the best of locally produced coffee beans and tea leaves.</p>
      <span>Please take a look at some of our products below!</span>
      <div id="catalog">
        {products.map((product) => (<div className="product" key={product} onClick={()=>this.displayProduct(product)}>{product.name}</div>))}
        </div>
        <div id="display">
          <h1>{this.state.name}</h1>
        <ul>
          <li>Type: {this.state.type}</li>
          <li>Blend: {this.state.blend}</li>
          <li>Taste: {this.state.taste}</li>
        </ul>
        </div>
    </div>
    </div>
  );
  }
}

/*class Product extends React.Component {
  render() {
        return (
     "s"
      
    )
  }
}*/

export default App;
