import React, {useState} from 'react';

export default function Form(){
  // state

    const [formState, setFormState] = useState({
        name: '',
        size: ['Small', 'Medium', 'Large', 'Extra Large', 'Family Stuffer'],
        sauce: ['Original Tomato', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'],
        toppings: ['Pepperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onions', 'Green Peppers', 'Diced Tomatoes', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese', 'Pinapple', 'Extra Cheese'],
        special: '',
    });
    
    const [orderState, setOrderState] = useState({})
    
const [errorState, setErrorState] = useState({
    name: '',
    size: '',
    sauce: '',
    toppings: '',
    special: ''
})

    //handlers

    const change = (e) => {
        e.persist();
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(formState)
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
                    value={formState.name}
                    onChange={change}/>
            </label>

            <label htmlFor='size'>
                Choose a pizza size: 
                <select 
                    id='size' 
                    name='size' 
                    selected='medium' 
                    value={formState.size.selected}
                    onChange={change} 
                    >
                    {['Small', 'Medium', 'Large', 'Extra Large', 'Family Stuffer'].map(size => (
                        <option 
                            id={size}
                            key={size.id} 
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
            checked={formState.checked}
            value={formState.name}
            onChange={change}
          />
              </label>
              )
            )}

            <label htmlFor='special'>Special Instructions
                <textarea 
                    id='special' 
                    name='special' 
                    value={formState.special} 
                    placeholder='Anything else we need to know to help get you the food you want?'
                    onChange={change}/>
            </label>
            <button id='add' type='submit' onSubmit={submit}>Add To Order</button>
        </form>
    )
}