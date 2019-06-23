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


