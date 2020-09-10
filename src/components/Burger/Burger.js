import React from 'react'
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {
    let myIngredients = Object.keys(props.ingredients)
        .map( (itemKey) => 
        {
         return [...Array(props.ingredients[itemKey])]
          .map( (_,i) => {
                    return <BurgerIngredient 
                             key={itemKey + i} 
                             type={itemKey} />
                })
    })

    // Flatten the array or Reduce to a single array instead of [],[],[],[]
    myIngredients = myIngredients.reduce((arr, el) => { 
        return arr.concat(el)
    }, [])
    console.log('myIngredients -------------', myIngredients);
    if(myIngredients.length === 0)
    {
        myIngredients = <p>Please add ingredients here!!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {/* <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' /> */}
            {myIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger;
