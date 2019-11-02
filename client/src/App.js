import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "../src/components/common/header";
import Container from "../src/components/common/container";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Package dependencies finder</h1>
              <p className="lead">This is an npm packages dependencies seacrh engine according to given package name</p>
            </div>
          </div>
          <Router>
            <div>
              <Header />
              <Container />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
