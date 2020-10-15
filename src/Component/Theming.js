import React from 'react'
import './App.css';
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles'
import {Button, ButtonGroup} from '@material-ui/core'
import { green, orange } from '@material-ui/core/colors';
import Makestyyle from './Component/makestyyle';

const theme = createMuiTheme({
    palette :{
      primary :{
        main: orange[500],
      },
      secondary :{
        main: green[500],
      }
    }
  })
  

function Theming() {
    return (
        <ThemeProvider theme={theme}>

   
    <div className="App">
      <header className="App-header">
      <Makestyyle/>
        <ButtonGroup>
        <Button
          variant="contained"
          href="sec"
          color="primary"
          >
          Send
      </Button>
      <Button
          variant="contained"
          href="sec"
          color="secondary"
          >
          Send
      </Button>
      </ButtonGroup>
      </header>
    </div>
    </ThemeProvider>
    )
}

export default Theming
