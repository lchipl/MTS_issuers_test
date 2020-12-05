import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


export const Card = ({card}) =>{
    return(
        <div>
            <h3>{card.name}</h3>
                
            <Link to='/about'>
                <Button color="primary">
                     Перейти
                </Button>
            </Link>
            
        </div>
    )
}