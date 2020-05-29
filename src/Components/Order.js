import React from 'react'


/*
 name
        size
        sauce
        toppings
        special
*/
export default function Order(props){
    const [order] = props;
    return (
        <h1 className='name-label'>Name: </h1>
        <p className='name'>{order.name}</p>
        <h3>Size: </h3>
        <p>{order.size}</p>
        <h3>Sauce: </h3>
        <p>{order.sauce}</p>
        <h3>Toppings: </h3>
        <ol className='toppings-container'>
            {order.toppings.map(topping =>(
                <li>
                    <p>{topping}</p>
                </li>
                )
            )
        </ol>
        <h3>Special Instructions: </h3>
        <p>{order.special}</p>
    )
}