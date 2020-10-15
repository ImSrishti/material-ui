import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors';
import Makestyyle from './Component/makestyyle';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15
    }
  }
})
function AppBar() {
    return (
        <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          
          <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography variation="h6">
                  MUI themeing
                </Typography>
                <Button>Login</Button>
              </ToolBar>
          </AppBar>

          <header className="App-header" >
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              learn how to use material UI
             </Typography>
            <Makestyyle />
          </header>
        </div>
      </Container>
    </ThemeProvider>
    )
}

export default AppBar;
