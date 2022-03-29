import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

// function App() {
//   return <MyComponent name="react" favoriteNumber={1}>리액트</MyComponent>;
// }

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    );
  }
}

// const App = () => {
//   return <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
// };
export default App;
