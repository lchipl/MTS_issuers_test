import { Button } from '@material-ui/core';
import React from 'react';

import './card.css';

export const Card = ({card}) =>{
    return(
        <div className="card">
            <h3>{card.name}</h3>
                
            
                <Button color="primary">
                     Перейти
                </Button>
            
            
        </div>
        
    )
}