import React, { Component } from 'react';
import './App.scss';
import  SignInForm  from './component/contact/index';
import Preloader from './component/preloader/index';
import Home from './component/home/index';
import AboutMe from './component/aboutme/index';
import Portfolio from './component/portfolio/index';
import Skills from './component/skills/index';
class App extends Component {

  state = {
    preloaderLoaded: false,
    
  }

  preloaderHasLoader = () => {
    this.setState({preloaderLoaded:true})
  }

  handleSignIn = values => {
    console.log(values);
  };

  render() {
    return (
        <div className="container">
          <Preloader hasPreloaderLoaded = {this.preloaderHasLoader}/>
          <Home hasPreloaderLoaded = {this.state.preloaderLoaded}/>
          <AboutMe/>
          <Portfolio/>
          <Skills/>
          <SignInForm onSubmit={this.handleSignIn} />
        </div>
    );
  }
}

export default App;