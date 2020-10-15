import React from 'react'
import React from 'react';
import './App.css';
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles'
import {Button, ButtonGroup} from '@material-ui/core'
import { green, orange } from '@material-ui/core/colors';
import Makestyyle from './Component/makestyyle';
import Typography from '@material-ui/core/Typography'

const theme = createMuiTheme({

typography:{
    h2:{
      fontSize:36,
      marginBottom:15
    }
  },

  palette :{
    primary :{
      main: orange[500],
    },
    secondary :{
      main: green[500],
    }
  }
})

function Typographyy() {
    return (
        <ThemeProvider theme={theme}>
    
    <div className="App">
      <header className="App-header" >
      <Typography variant="h2" component="div">
        Welcome to MUI
      </Typography>
      <Typography variant="subtitle1">
        learn how to use material UI
      </Typography>
      <Makestyyle/>
      </header>
    </div>
    </ThemeProvider>
    )
}

export default Typographyy
