import React from 'react';
import { Card } from '../Card/Card';

import './cards.css'


export const Cards = ({cards})=>{
    return(
        cards.map((card)=><li key={cards.id}> <Card card={card}/> </li>)
    )
}