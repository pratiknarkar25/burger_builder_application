import React from 'react'
import classes from './BuiltControl.css'

const BuiltControl = (props) => {
  <div>
    <div className={classes.Label}>{props.label></div>
    <button className={classes.Less}>Less</button>      
    <button className={classes.More}>More</button>      
  </div>
}

export default BuiltControl;