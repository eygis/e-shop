import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  hamburgerFunction = () => {
    document.getElementById("hamburgerMenuArea").style.display="block"
  }


  render() {

    window.onclick = (event) => {
      if (event.target === document.getElementById("hamburgerMenuArea")) {
        document.getElementById("hamburgerMenuArea").style.display="none"
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
      <span id="subTitle">Your source for local coffee and tea!</span>
      </div>
    </div>
  );
  }
}

export default App;
