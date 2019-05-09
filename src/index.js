import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

const MyComponent = () => {
  return <h2> Way to go, you just created a MyComponent!</h2>;
};


function Message(props) {
  return <h1> Good to have you back, {props.username}</h1>;
}

function AppNew() {
  return (
    <div>
      <Message username="Mohan" />
      <Message username="Vishnu" />
      <Message username="Sundar" />
    </div>
  );
}

// function Clock(props) {
//     return(
//         <div>
//             <h1>Hello, World!</h1>
//             <h2>Current Time in India: {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );

// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>Current Time Is : {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countNum: 0 };
  }

  onClick(e) {
    this.setState({
      countNum: this.state.countNum + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.countNum}</h1>
        <button onClick={this.onClick.bind(this)}>Count Up</button>
      </div>
    );
  }
}

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     this.handleClick = this.handleClick.bind(this);
//   }

// handleClick() {
//   this.setState(state => ({
//     isToggleOn: !state.isToggleOn
//   }));
// }

// render() {
//   return (
//     <button onClick={this.handleClick}>
//       {" "}
//       {this.state.isToggleOn ? "ON" : "OFF"}
//     </button>
//   );
// }
// }

//setInterval(tick,1000);
//const element = <h1>Happy New Year, {getGreeting(user)}</h1>;

//ReactDOM.render(element, document.getElementById("root1"));

ReactDOM.render(<MyComponent />, document.getElementById("root2"));

ReactDOM.render(<AppNew />, document.getElementById("root3"));

ReactDOM.render(<Clock />, document.getElementById("root4"));

ReactDOM.render(<Counter />, document.getElementById("root5"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
