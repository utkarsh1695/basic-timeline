import React, { Component } from 'react';
import "./App.css";
import MaterialInput from './material-input';

export default class App extends Component {
  constructor() {
    super()

    this.set = null;
    this.state = {
      isOpen: false,
      currentState: 0
    }
  }

  componentDidMount() {
    this.set = setInterval(() => {
      this.setState({
        currentState: this.state.currentState + 1
      })
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.set);
  }

  toggle = (index) => {
    if (this.state.openState === index) this.setState({ isOpen: !this.state.isOpen })
    else this.setState({ openState: index, isOpen: true })
  }

  getStatusClass = (index) => {
    const { currentState } = this.state;
    switch (true) {
      case currentState === index: return "active";
      case index < currentState: return "completed";
      case index > currentState: return "pending";
      default: return "pending"
    }
  }


  render() {
    return (
      <div className="container">
        <h1>State will change every 10 seconds</h1>
        <ul className="stepper">
          <li className={`step ${this.getStatusClass(0)} first`}>
            <div className="header" onClick={() => this.toggle(0)}>HEADER</div>
            {
              this.state.openState === 0 && this.state.isOpen && <div className="content">CONTENT</div>
            }
          </li>
          <li className={`step ${this.getStatusClass(1)}`}>
            <div className="header" onClick={() => this.toggle(1)}>HEADER</div>
            {
              this.state.openState === 1 && this.state.isOpen && <div className="content">CONTENT</div>
            }
          </li>
          <li className={`step ${this.getStatusClass(2)} last`}>
            <div className="header" onClick={() => this.toggle(2)}>HEADER</div>
            {
              this.state.openState === 2 && this.state.isOpen && <div className="content">CONTENT</div>
            }
          </li>
        </ul>




        <MaterialInput />
      </div>
    )
  }
}
