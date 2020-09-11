import React from 'react'
import classes from './BuiltControl.css'

const BuiltControl = (props) => (
  <div className={classes.BuiltControl}>
    <div className={classes.Label}>
       {props.label}
    </div>    
    <button 
      className={classes.Less} 
      onClick={props.remove}
      disabled={props.disabledIngredient}>Less</button>      
    <button className={classes.More} onClick={props.add}>More</button>      
  </div>
)

export default BuiltControl;