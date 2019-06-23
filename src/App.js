import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from 'react-router-dom';
import Presentation from './components/Presentation';
// import IndexProjet from './components/IndexProjet';
import Inscription from './components/Inscription';
import Faq from './components/Faq';
import Connexion from './components/Connexion';
class App extends React.Component{
  render(){
      return(
        <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Presentation}/>
              <Route exact path='/inscription' component={Inscription}/>
              <Route exact path='/faq' component={Faq}/>
              <Route exact path='/connexion' component={Connexion}/>
          </Switch>
        </div>
      </Router>
      )
  }
}
export default App;
