import React from 'react';

export default function Form(){

    return(
        <form onSubmit={submit}>
            <label htmlFor='name'>
                Name:

                <input id='name' name='name' placeholder='Please provide a name' value={}/>
            </label>

            <label htmlFor='size'>
                Choose a pizza size: 
                <select id='size' name={size} selected='medium' value={} >
                    {formState.size.map(size => (
                        <option key='size.id' name={size} value={size}>{size}
                        </option>
                    ))}
                </select>
            </label>
        </form>
    )
}