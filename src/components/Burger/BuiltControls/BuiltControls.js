import React from 'react'
import classes from './BuiltControls.css'
import BuiltControl from './BuiltControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BuiltControls = (props) => {
  return(
    <div className={classes.BuiltControls}>
      { controls.map((control) => (
          <BuiltControl 
            key={control.label} 
            label={control.label} 
            add={() => props.added(control.type)}
            remove = {() => props.removed(control.type)}
            disabledIngredient={props.disabledIngredients[control.type]} />
       ))}    
    </div>
   )
};

export default BuiltControls;
