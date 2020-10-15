import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'

const useStyles = makeStyles({
    root :{
      background: 'linear-gradient(45deg,#333,#999)',
      border: 0,
      borderRadius: 15,
      color: 'white',
      padding : '0 30px'
    }
  })

  function ButtonStyles () {
    const classes = useStyles();
    return <Button className={classes.root} >Styled Button</Button>
  }

  
  function makestyyle() {
      return (
          <div>
              <ButtonStyles/>
          </div>
      )
  }
  
  export default makestyyle
  