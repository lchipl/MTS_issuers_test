import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from '../components/Cards/Cards';
import { FETCH_COMPANIES } from '../redux/types';

import './main.css'

export const Main = () =>{
    const dispatch = useDispatch()
    const companies = useSelector(({companies})=>companies);

    useEffect(()=>{
        dispatch({type:FETCH_COMPANIES})
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

        <Cards companies={companies}/>
        </div>
    )
}