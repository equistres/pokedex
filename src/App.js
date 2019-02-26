import React, { Component } from 'react';
import './App.css';
import GetInfoPokemon from './containers/GetInfoPokemon';
import HandleError from './containers/HandleError';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://camo.githubusercontent.com/1a4b11888ddf9f2b7a9353d6b69503e634e8704c/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67" width="500px"/>
        </header>
        <HandleError><GetInfoPokemon /></HandleError>
      </div>
    );
  }
}
