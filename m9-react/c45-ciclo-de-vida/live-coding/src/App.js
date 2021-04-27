import React, { Component } from 'react'

import Header from './components/header/Header'
import Home from './containers/home/Home'

import './App.css';

export default class App extends Component {  

  render() {

    return (
      <main>
        <Header />
        <Home />

      </main>
    )
  } 
}