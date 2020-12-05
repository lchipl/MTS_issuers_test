import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';

export const Card = ({card}) =>{
    return(
        <Link to='/about'>
        <div className="card">
            <h3>{card.name}</h3>
                
            
                <Button color="primary">
                     Перейти
                </Button>
            
            
        </div>
        </Link>
    )
}