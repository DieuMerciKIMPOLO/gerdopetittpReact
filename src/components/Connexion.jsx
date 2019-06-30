import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import config from '../config';
import * as firebase from 'firebase';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import SlideShow from './SlideShow';
import { Grid } from '@material-ui/core';
import NavbarComponent from '../headers/NavbarComponent';
import FooterComponent from './footer/FooterComponent';
    
class Connexion extends React.Component{
  constructor(props){
    super(props);
    this.state={
        nom:1,
        prenom:0,
        personnages:{}
    };
    firebase.initializeApp(config)
    this.ChangerNom=this.ChangerNom.bind(this);
    this.ChangerPreNom=this.ChangerPreNom.bind(this);
    this.connexion=this.connexion.bind(this)
}
connexion(facebook){
   if(facebook==='facebook'){
     var provider= new firebase.auth.FacebookAuthProvider();
   }else if(facebook=='twitter'){
    var provider= new firebase.auth.TwitterAuthProvider();
   }else{
    var provider = new firebase.auth.GoogleAuthProvider();
   }
   
   firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage)
    alert(errorMessage)
    // ...
  });
}
ChangerNom(){
    this.setState({nom:this.state.nom+5})
}
ChangerPreNom(){
    this.setState({prenom:this.state.prenom+15})
}
componentDidMount(){
  const ref = firebase.database().ref('personnages');
  const insertV=firebase.database().ref('personnages').push();
  insertV.set(
    {
      nom:"Mabiala",
      prenom:"Julia"
    }
  )
  ref.on('value',snapshot =>{
    this.setState({personnages:snapshot.val()})
    console.log(snapshot.val())
  });
}
    render(){
        const {classes}={}
        return(
          <e>
           <NavbarComponent/>
          <Container fixed>
          <Grid container>
          <Grid item xs={12}>
          <SlideShow/>
          </Grid>
          </Grid>
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <button onClick={()=>this.connexion('facebook')}>Facebook</button>
                <button onClick={()=>this.connexion('twitter')}>Twitter</button>
                <button onClick={()=>this.connexion('google')}>Google</button>
            </div>
            </div>
          </Container>
          <FooterComponent/>
          </e>
        )
    }
}
export default Connexion;


