import { Button,Modal } from '@material-ui/core';
import React,{useState} from 'react';

import './card.css';

export const Card = ({card}) =>{

    const [open,setOpen] = useState(false)

    const handleClickOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }

    return(
        
        <div>
            <Modal
        open={open}
        
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        >
            <div>
            Модалка
            <Button color="primary" onClick={handleClose}>
                    Закрыть
            </Button> 
            </div>
        </Modal>
        
  
        <div className="card" onClick={handleClickOpen}>
                <h3>​​​​name: {card.name}</h3>
                    <p>secid: </p>
                    <p>shortname:</p> 
                    ​​​​
                   <p>regnumber:</p>
                   <p>emitent_title:</p>
                   <p>emitent_inn:</p>
                   <p>gosreg:</p>
                
            <Button color="primary">
                    Перейти
            </Button>           
        </div>
        </div>
    )
}





