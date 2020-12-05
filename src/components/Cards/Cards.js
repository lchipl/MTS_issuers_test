import React from 'react';
import { Card } from '../Card/Card';

import './cards.css'


export const Cards = ({companies})=>{
    return(
        companies.map((card)=><li > <Card card={card}/> </li>)
    )
}