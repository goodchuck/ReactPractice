import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent';

function App() {
  return <MyComponent name="react" favoriteNumber={1}>리액트</MyComponent>;
}
export default App;
