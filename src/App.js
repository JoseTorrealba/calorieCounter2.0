import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './components/Form'
import FormContainer from './components/FormContainer'
import Formulario from './containers/FormUser'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
class App extends Component {

  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <Router store={this.props.store}>
        
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <Route   exact path="/q"  render={()=><FormContainer store={this.props.store}/>}/>
            </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps
  }
}
export default connect(mapStateToProps)(App);
