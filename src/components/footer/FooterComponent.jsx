import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
   
class FooterComponent extends React.Component{
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
            </Typography>
            </Toolbar>
          </AppBar>
          </e>
        )
    }
}
export default FooterComponent;


