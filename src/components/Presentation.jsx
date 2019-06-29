import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SlideShow from './SlideShow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';
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
    
class Presentation extends React.Component{
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
       }else{
        var provider= new firebase.auth.TwitterAuthProvider();
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
          <AppBar position="static" color="primary">
              <Toolbar>
              <Typography variant="h6" color="inherit">
              TP.Js
              </Typography>
              </Toolbar>
          </AppBar>
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          </Navbar>
          <Container fixed>
          <Grid container>
            <Grid item xs={12}>
            <SlideShow/>
            </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={6}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo tellus et auctor rhoncus. Pellentesque in mollis eros. Integer maximus condimentum neque, eget sagittis libero molestie ut. Nulla tempus accumsan nulla nec hendrerit. Aenean volutpat dolor at nisl euismod, eu bibendum est lacinia. Quisque in ultrices est. Mauris sit amet accumsan nibh, sed eleifend nunc.
              </p>
              <p>
              Phasellus sodales justo id venenatis scelerisque. Sed non laoreet libero, et feugiat neque. Etiam finibus egestas quam, fringilla maximus nisi venenatis ut. Aliquam elementum blandit ligula et convallis. In convallis interdum urna, at aliquam urna efficitur nec. Morbi sed luctus nisl, ac efficitur turpis. Cras aliquet orci sit amet lacinia blandit. Morbi aliquet mi velit, at porttitor lacus volutpat id. Mauris gravida lacinia lectus malesuada volutpat. Pellentesque ornare tristique quam, aliquet pretium quam facilisis et. Sed tincidunt vel dui sed accumsan.
              </p>
              <p>
              5 paragraphes, 394 mots, 2687 caractères de Lorem Ipsum généré
              </p>
            </Grid>
            <Grid item xs={6}>
            <table>
              {
                Object.keys(this.state.personnages).map((item)=>{
                  return(
                    <tr>
                        <td>{this.state.personnages[item].nom}</td>
                        <td>{this.state.personnages[item].prenom}</td>
                    </tr>
                    )
                })
              }
             </table>
             <button onClick={()=>this.connexion('facebook')}>Facebook</button>
             <button onClick={()=>this.connexion('twitter')}>Twitter</button>
            <MediaCard paramettreGerdo="Je suis Gerdo"/>
            </Grid>
            <Grid item xs={12}>
            <MediaCard paramettreGerdo="Je suis Gerdo Ngondo"/>
            </Grid>
          </Grid>
          </Container>
          <AppBar position="static" color="primary">
            <Toolbar>
            <Typography variant="h6" color="inherit">
            </Typography>
            </Toolbar>
          </AppBar>
          </e>
        )
    }
}
export default Presentation;


