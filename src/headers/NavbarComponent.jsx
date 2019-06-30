import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
    
class NavbarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={};
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
          <NavbarBrand href="/">Sup Info</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/inscription">Inscription</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/connexion">Connexion</NavLink>
            </NavItem>
              <NavItem>
              <NavLink href="/faq">Faq</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/chat">Chat</NavLink>
          </NavItem>
            </Nav>
          </Collapse>
          </Navbar>
          </e>
        )
    }
}
export default NavbarComponent;


