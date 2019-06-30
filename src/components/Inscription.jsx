import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SlideShow from './SlideShow';
import { Grid } from '@material-ui/core';
import NavbarComponent from '../headers/NavbarComponent';
import FooterComponent from './footer/FooterComponent';
import config from '../config';
import * as firebase from 'firebase';

class Inscription extends React.Component{
    constructor(props){
        super(props);
        firebase.initializeApp(config)
        this.state={
            inscription:{
              nom:'',
              prenom:'',
              adresse:'',
              filiere:'',
              annee:'',
            }
        }
        this.soumettreLeFormulaire=this.soumettreLeFormulaire.bind(this);
        this.detecterLeChangement=this.detecterLeChangement.bind(this);
    }
    soumettreLeFormulaire(){
      // alert("Le formulaire vient d' etre soumis!")
      console.log(this.state.inscription)
    }

    detecterLeChangement(e,nom){
      var data=this.state.inscription;
      if(nom==='nom'){
        data['nom']=e.target.value;
      }else if(nom==='prenom'){
        data['prenom']=e.target.value;        
      }else if(nom==='filiere'){
        data['filiere']=e.target.value;
      }else if(nom==='annee'){
        data['annee']=e.target.value;
      }else if(nom==='adresse'){
        data['adresse']=e.target.value;
      }
      this.setState({inscription:data});
      // console.log(e.target.value,nom)
    }
    componentDidMount(){
      const ref = firebase.database().ref('personnages');
      const insertV=firebase.database().ref('personnages').push();
      insertV.set({nom:"Mabiala",prenom:"Julia"});
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
                INSCRIPTION
            </div>
            <div className="card-body">
            <form>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Nom</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Votre nom" onChange={(e)=>this.detecterLeChangement(e,'nom')}/>
              </div>
            </div>
            <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Prenom(s)</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Votre prenom" onChange={(e)=>this.detecterLeChangement(e,'prenom')}/>
            </div>
          </div>
          <div className="form-group row">
          <label for="inputEmail3" className="col-sm-2 col-form-label">Votre adresse</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Votre adresse" onChange={(e)=>this.detecterLeChangement(e,'adresse')}/>
          </div>
        </div>
        <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">Filiere</label>
        <div className="col-sm-10">
          <select type="email" className="form-control" id="inputEmail3" placeholder="Votre Filiere" onChange={(e)=>this.detecterLeChangement(e,'filiere')}>
              <option>F1</option>
              <option>F2</option>
              <option>F3</option>
              <option>F4</option>
          </select>
        </div>
      </div>
      <div className="form-group row">
      <label for="inputEmail3" className="col-sm-2 col-form-label">Annee</label>
      <div className="col-sm-10">
        <select type="email" className="form-control" id="inputEmail3" placeholder="Votre annee" onChange={(e)=>this.detecterLeChangement(e,'annee')}>
        <option>Premiere</option>
        <option>Deuxieme</option>
        <option>Troisieme</option>
        <option>Quatrieme</option>
        <option>Cinquieme</option>
        </select>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-10">
        <button type="submit" className="btn btn-primary" onClick={()=>this.soumettreLeFormulaire()}>Enregistrer</button>
      </div>
    </div>
    </form>
      </div>
      </div>
    </Container>
    <FooterComponent/>
    </e>
        )
    }
}
export default Inscription;


