import { AppBar, IconButton, MuiThemeProvider, Toolbar, Typography, Tooltip, Drawer, ListItem, List, ListItemText } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { Component } from 'react';
import theme from './themes/defaultTheme';

const open=theme=>({
})

class App extends Component {
  state={
    open:false
  }

  handleOpen=()=>{
    this.setState((s)=>({open: !s.open}))
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position='sticky'>
          <Toolbar style={{display:'flex'}} >
            <Typography variant='h6' color='inherit' aria-label='App Bar'>
              Hello World
            </Typography>
            <Tooltip title='Delete'>
              <IconButton onClick={this.handleOpen}>
                <SettingsIcon/>
              </IconButton>
            </Tooltip>
            <Drawer variant='persistent' style={{
              display:'flex',
              height:'100%',
              width:'50%'
            }} 
            anchor='left'
            open={this.state.open}>
              <List>
              {['Buga','Boxes'].map((text,index)=>
                <ListItem>
                  <ListItemText>{text}</ListItemText>
                </ListItem>
              )}
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;