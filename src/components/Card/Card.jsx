import { Button,Modal } from '@material-ui/core';
import React,{useState} from 'react';
import { Dividents } from '../Table/Dividents';

import './card.css';

export const Card = ({card}) =>{

    const [open,setOpen] = useState(false)

    const handleClickOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    console.log(card.securities.data[0][1])
    return(
        
        <div>
            <Modal
        open={open}
        
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        >

            <div className='modalCard'>
                <Button color="primary" onClick={handleClose}>
                    Закрыть
            </Button> 
            Модалка {card.securities.data[0]}
            Дивиденты:
            <Dividents />

            
            </div>
        </Modal>
        
  
        <div className="card" >
                <h3>​​​​name:</h3>
                    <p>id: {card.securities.data[0][0]} </p>
                    <p>secid: {card.securities.data[0][1]}</p>
                    <p>shortname:</p> 
                    ​​​​
                   <p>regnumber:</p>
                   <p>emitent_title: {card.securities.data[0][8]}</p>
                   <p>emitent_inn: {card.securities.data[0][9]}</p>
                   <p>gosreg: {card.securities.data[0][11]}</p>
                
            <Button color="primary" onClick={handleClickOpen}>
                    Подробнее
            </Button>           
        </div>
        </div>
    )
}





