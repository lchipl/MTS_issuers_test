import React, { useState } from 'react';
import { Cards } from '../components/Cards/Cards';

import './main.css'

export const Main = () =>{
    const [state,setState] = useState({
        cards:[{
            id:1,
            name:'MTS'
        },
        {
            id:2,
            name:'Yand'
        },
        {
            id:3,
            name:'Sber'
        }]
    })
        
    
    return(
        <div className="main">

        <Cards cards={state.cards}/>
        </div>
    )
}