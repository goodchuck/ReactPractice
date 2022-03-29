import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

// function App() {
//   return <MyComponent name="react" favoriteNumber={1}>리액트</MyComponent>;
// }

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox = ref}/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

// const App = () => {
//   return <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
// };
export default App;
