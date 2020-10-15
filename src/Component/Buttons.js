import React from 'react'
import {Button} from '@material-ui/core/Button'
function Buttons() {
    return (
        <div>
            <Button variant="contained" size="large" color="primary">
          Primary
      </Button>
        
        <Button
          variant="contained"
          href="sec"
          color="secondary"
          endIcon={<Icon>send</Icon>}   // added font icons in index.html
          >
          Send
      </Button>


        <Button variant="outlined"
          style={{ "backgroundColor": "white" }}
          startIcon={<DeleteIcon />}>
          default
      </Button>
        </div>
    )
}

export default Buttons
