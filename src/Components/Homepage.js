import React from 'react';
import {Link} from 'react-router-dom'

export default function Homepage() {

    return (
        <Link to='/pizza'>
            <button type='button'>
                Build Your Own Pizza
            </button>
        </Link>
    )
}