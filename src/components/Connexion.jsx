import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
    
class Connexion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nom:1,
            prenom:0
        }
        this.ChangerNom=this.ChangerNom.bind(this);
        this.ChangerPreNom=this.ChangerPreNom.bind(this);
    }
    ChangerNom(){
        this.setState({nom:this.state.nom+5})
    }
    ChangerPreNom(){
        this.setState({prenom:this.state.prenom+15})
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
        <div className="card">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
            <form>
            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
              </div>
            </div>
            <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
            </div>
            </div>
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
export default Connexion;


