import React from 'react'

function Checkboxes() {
    return (
        <div>
             <Checkbox
          defaultChecked
          size="small"
          inputProp
          s={{ 'aria-label': 'checkbox with small size' }}
        />
        
        <FormControlLabel
          control={<Checkbox checked={state1.checkedA} onChange={handleChange} name="checkedA" />}
          label="Secondary"
        />

        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
          label="Custom icon"
        />
        </div>
    )
}

export default Checkboxes
