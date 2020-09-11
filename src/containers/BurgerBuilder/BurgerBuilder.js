
import React, { Component } from "react"
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import classes from '../../components/Burger/BuiltControls/BuiltControls.css'
import BuiltControls from '../../components/Burger/BuiltControls/BuiltControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6
}
class BurgerBuilder extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {}
  // }

  state = {
    ingredients: {
      'salad': 2,
      'cheese': 1,
      'meat': 2,
      'bacon': 1
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    // instead of disabling, just want no action then use below code
    // if(oldCount <= 0){
    //   return
    // }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceReduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceReduction
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
  }

  render(){
    let _disabledIngredients = {}

    for (let key in this.state.ingredients){
      _disabledIngredients[key] = (this.state.ingredients[key] <= 0)
    }
    {console.log('_disabledIngredients ---',_disabledIngredients)}
    return(
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <div>
            <BuiltControls 
              className={classes.BuiltControl}
              added={this.addIngredientHandler}
              removed={this.removeIngredientHandler}
              disabledIngredients = {_disabledIngredients}
            />
          </div>    
        </Aux>
        )}
}

export default BurgerBuilder;