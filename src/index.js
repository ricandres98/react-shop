import React from "react";
import reactDom from "react-dom";
import App from './routes/App.jsx';

reactDom.render(<App />, document.getElementById('app'));
// const root = ReactDOM.createRoot(document.getElementById("app"));

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount () {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//         console.log('this is:', this);
//     }

//     render() {
//     return (
//         <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
//     }
// }

// const Appo = () => {
//     return (
//         <>
//         <Clock/>
//         <Clock/>
//         <Clock/>
//         </>
//     );
// }

// reactDom.render(<Appo />, document.getElementById('app'));
