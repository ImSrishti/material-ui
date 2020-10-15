import React from 'react'

function ButtonGroups() {
    return (
       
         <ButtonGroup  variant="contained">
        <Button size="large" color="primary">
          Primary
      </Button>
        
        <Button
          href="sec"
          color="secondary"
          endIcon={<Icon>send</Icon>}   // added font icons in index.html
          >
          Send
      </Button>


        <Button 
          style={{ "backgroundColor": "white" }}
          startIcon={<DeleteIcon />}>
          default
      </Button>
      </ButtonGroup>   
        
    )
}

export default ButtonGroups
