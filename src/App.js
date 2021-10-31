import './App.css';
import React from 'react';
import products from './products.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      blend: "",
      taste: "",
      cart: []
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
    document.getElementById("displayMenuArea").style.display = "block"
  }
  addToCart = (product) => {
    if (product.name === "") {
      return
    } else {
    this.setState({
      cart: [...this.state.cart, product.name]
    })
  }
  }
  cartFunction = () => {
    document.getElementById("cartMenuArea").style.display = "block"
  }

  deleteProduct = (arr, index) => {
    arr.splice(index, 1)
    let value = arr.map(element => element.split(" ").splice(-1));
    let refresh = arr.map(element => element.split(" ").slice(0, -1).join(" "));
    let newCart = []
    refresh.forEach((element, index) => {
      for (let i = 0; i < (value[index][0].slice(1, -1)); i++) {
        newCart.push(element);
      }
  })
  //console.log(newCart)
   this.setState({
     cart: newCart
   })
  }

  render() {

    window.onclick = (event) => {
      if (event.target === document.getElementById("hamburgerMenuArea")) {
        document.getElementById("hamburgerMenuArea").style.display= "none"
      }
      if (event.target === document.getElementById("displayMenuArea")) {
        document.getElementById("displayMenuArea").style.display= "none"
      }
      if (event.target === document.getElementById("cartMenuArea")) {
        document.getElementById("cartMenuArea").style.display= "none"
      }
    }

    let unfiltered = this.state.cart.map(item => 
      item + " (" + this.state.cart.reduce((count, current) => (current === item ? count + 1 : count), 0) + ")"
       );

    let filtered = [...new Set(unfiltered)]

    let totalFunction = () => {
      if (this.state.cart.length === 0) {
        return "Please add a product to your cart!"
      } else {
      return "Total: $" + ((this.state.cart.length) * 9.99).toFixed(2)
      }
    }

  return (
    <div className="wrapper">
      <div id="header">
      <div id="hamburgerDiv">
        <i id="hamburger" className="fa fa-bars" onClick={this.hamburgerFunction}></i>
        </div>
      <div className="menuArea" id="hamburgerMenuArea">
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
      <div id="cart" onClick={() =>this.cartFunction()}>
        Your Cart ({this.state.cart.length}) 
        <i id="cartIcon" className="fa fa-shopping-cart"></i>
      </div>
      <div id="bar"></div>
      <div className="menuArea" id="cartMenuArea">
        <div id="cartMenu">
          {filtered.flatMap((product, index) => {
            return <div className="cartProduct">{product}<button id="delete" onClick={()=>this.deleteProduct(filtered, index)}>X</button></div>
          })}
          <div id="total" className="cartProduct">{totalFunction()}</div>
          <button id="checkOut" onClick={()=>alert("You would now be directed to the check out page.")}>Check Out</button>
        </div>
      </div>
      </div>
      <div id="content">
      <p className="text">At Beans & Leaves, we strive to bring you the best of locally produced coffee beans and tea leaves.</p>
      <span>Please take a look at some of our products below!</span>
      <div id="catalog">
        {products.map((product) => (<div className="product" key={product.name} onClick={()=>this.displayProduct(product)}>{product.name}</div>))}
        </div>
        <div className="menuArea" id="displayMenuArea">
        <div id="display">
          <h1>{this.state.name}</h1>
          <h3>$9.99</h3>
        <ul>
          <li><span className="underline">Type: </span>{this.state.type}</li>
          <li><span className="underline">Blend: </span> {this.state.blend}</li>
          <li><span className="underline">Taste: </span> {this.state.taste}</li>
        </ul>
        <button id="addToCart" onClick={() => this.addToCart(this.state)}>Add To Cart</button>
        </div>
        </div>
        {/*filtered*/}
        {/*console.log(filtered)*/}
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
