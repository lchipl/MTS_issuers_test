import React, { useState, useEffect } from 'react';
import { Cards } from '../components/Cards/Cards';
import { MosApi } from '../services/mos';

import './main.css'

export const Main = () =>{

    useEffect(()=>{
        MosApi()
    },[])

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