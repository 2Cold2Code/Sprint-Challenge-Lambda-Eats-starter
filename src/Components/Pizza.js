import React, {useState, useEffect} from 'react';

export default function Pizza(props){
  // state && props
  
  const {setOrder} = props;
  const sizes = ['Small', 'Medium', 'Large', 'Extra Large', 'Family Stuffer']
  const sauces = ['Original Tomato', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo']
  const toppingsList = ['Pepperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onions', 'Green Peppers', 'Diced Tomatoes', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese', 'Pinapple', 'Extra Cheese']

    const [pizzaState, setPizzaState] = useState({
       
    });
    
    const [errorState, setErrorState] = useState({
        name: '',
        size: '',
        sauce: '',
        toppings: '',
        special: ''
    })

// effects

   useEffect(()=>{
       setPizzaState({...pizzaState, [pizzaState.size]:
            {...pizzaState.size, [pizzaState.size]: pizzaState.value}, [pizzaState.size]: ""
        }
    )},  [pizzaState.size])

    useEffect(()=>{
        setPizzaState({...pizzaState, [pizzaState.toppings]:
            {...pizzaState.toppings, [pizzaState.toppings]: pizzaState.value}, [pizzaState.toppings]: ""
        }
    )
    }, [pizzaState.toppings])
    
    useEffect(()=>{
       setOrder({...pizzaState, [pizzaState.name]: pizzaState.value})
   }, [pizzaState])
    //handlers

    const change = (e) => {
        e.persist();
        e.target.checked ? 
        setPizzaState({...pizzaState, toppings: {
            ...pizzaState.toppings, [e.target.name]: e.target.name}
        }) :
        setPizzaState({...pizzaState, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(pizzaState)
        setOrder({...pizzaState, [e.target.name]: e.target.value})
        setPizzaState({...pizzaState, [e.target.name]: ''})
    }


    return(
        <form onSubmit={submit}>
            <label 
                htmlFor='name'>
                    Name:

                <input 
                    id='name' 
                    name='name' 
                    placeholder='Please provide a name' 
                    value={pizzaState.name}
                    onChange={change}/>
            </label>

            <label htmlFor='size'>
                Choose a pizza size: 
                <select 
                    id='size' 
                    name='size' 
                    value={pizzaState.size}
                    onChange={change} 
                    >
                    {[
                        'Small', 
                        'Medium', 
                        'Large', 
                        'Extra Large', 
                        'Family Stuffer'].map((size, index) => 
                            (
                        <option 
                            id={size}
                            key={pizzaState.size+Date.now()} 
                            name={size} 
                            value={size}
                        >{size}
                        </option>
                    ))}
                </select>
            </label>

            <label>Toppings:</label>
            {
            [
                'Pepperoni', 'Sausage', 'Canadian Bacon', 
                'Spicy Italian Sausage', 'Grilled Chicken', 
                'Onions', 'Green Peppers', 'Diced Tomatoes', 
                'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 
                'Three Cheese', 'Pinapple', 'Extra Cheese'
            ].map((topping) => (
                <label                                                     // topping element label
                key={topping}
                htmlFor={topping}
                style={{
                    backgroundColor: "green",
                    border: "1px solid gold",
                    color: "white",
                }}
        >
          {topping}
          <input 
            multiple={true}                                                  // topping element
            key={topping.id}
            id={topping}
            name={topping}
            type="checkbox"
            checked={pizzaState.checked}
            value={pizzaState.name}
            onChange={change}
          />
              </label>
              )
            )}

            <label htmlFor='special'>Special Instructions
                <textarea 
                    id='special' 
                    name='special' 
                    value={pizzaState.special} 
                    placeholder='Anything else we need to know to help get you the food you want?'
                    onChange={change}/>
            </label>
            <button id='add' type='submit' submit={submit}>Add To Order</button>
        </form>
    )
}