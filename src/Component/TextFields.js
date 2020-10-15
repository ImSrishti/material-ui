import React from 'react'

function TextFields() {
    return (
        <form  noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" placeholder="gi"/>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic"  variant="outlined" type="date"/>
          <TextField id="outlined-basic"  variant="outlined" type="time"/>
        </form>
    )
}

export default TextFields
