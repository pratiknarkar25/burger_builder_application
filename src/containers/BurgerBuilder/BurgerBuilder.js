
import React, { Component } from "react"
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import classes from '../../components/Burger/BuiltControls/BuiltControls.css'
import BuiltControls from '../../components/Burger/BuiltControls/BuiltControls'

class BurgerBuilder extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {}
  // }

  state = {
    ingredients: {
      salad: 2,
      cheese: 1,
      meat: 2,
      bacon: 1
    }
  }

  render(){
    return(
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <div>
            <BuiltControls className={classes.BuiltControl}/>
          </div>    
        </Aux>
        )}
}

export default BurgerBuilder;