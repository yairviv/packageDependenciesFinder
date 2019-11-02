import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import PackagesList from './components/Packages/PackagesList'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from "../src/components/common/header";
import Container from "../src/components/common/container";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Package dependencies finder</h1>
              <p class="lead">This is an npm packages dependencies seacrh engine according to given package name</p>
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
