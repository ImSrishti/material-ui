import React from 'react'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors';
import Makestyyle from './Component/makestyyle';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const theme = createMuiTheme({
typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15
    }
  },

  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    }
  }
})

function container-and-grid() {
    return (
        <ThemeProvider theme={theme}>
        <Container maxWidth="xs">
          <div className="App">
            <header className="App-header" >
              <Typography variant="h2" component="div">
                Welcome to MUI
              </Typography>
              <Typography variant="subtitle1">
                learn how to use material UI
               </Typography>
              
              <Grid container spacing="3" justify="center">
                <Grid item>
                  <Paper style={{ height: 75, width: 50 }} />
                </Grid>
                <Grid item>
                  <Paper style={{ height: 75, width: 50 }} />
                </Grid>
                <Grid item>
                  <Paper style={{ height: 75, width: 50 }} />
                </Grid>
              </Grid>
  
              <Makestyyle />
            </header>
          </div>
        </Container>
      </ThemeProvider>
    )
}

export default container-and-grid
