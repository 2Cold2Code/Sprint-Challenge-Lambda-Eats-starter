import React, {useState} from 'react';

export default function Form(){
  
    const [formState, setFormState] = useState({
        name: '',
        size: ['Small', 'Medium', 'Large', 'Extra Large', 'Family Stuffer'],
        sauce: ['Original Tomato', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'],
        toppings: ['Pepperoni', 'Sausage', 'Canadian Bacon', 'Spicy Italian Sausage', 'Grilled Chicken', 'Onions', 'Green Peppers', 'Diced Tomatoes', 'Black Olives', 'Roasted Garlic', 'Artichoke Hearts', 'Three Cheese', 'Pinapple', 'Extra Cheese'],
        special: '',
    });

    const change = (e) => {
        e.persist();
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const submit = () => {
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
        </form>
    )
}