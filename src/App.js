import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import ContactForm from './ContactForm';
import Home from './Home';
import Faq from './Faq';
import Contact from './Contact';
import About from './About';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Route exact path='/' component= {Home} />
            <Route exact path='/about' component= {About} />
            <Route path='/about/faq' component= {Faq} />
            <Route exact path='/contact' component= {Contact} />
          </div>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ContactForm />
      </div>
    );
  }
}

export default App;
