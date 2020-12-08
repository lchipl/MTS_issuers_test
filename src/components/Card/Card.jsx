import { Button,makeStyles,Modal } from '@material-ui/core';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_COMPANY } from '../../redux/types';
import { Promotions } from '../Promotions/Promotions';
import { Dividends } from '../Table/Dividends';
import Chart from '../Сhart/Сhart';

import Mts from '../../assets/logo/mts.png'
import Sber from '../../assets/logo/sber.jpg'
import Yndx from '../../assets/logo/yndx.jpg'

import './card.css';

export const Card = ({card}) =>{

    const [open,setOpen] = useState(false)
    const dispatch = useDispatch()
    const handleClickOpen =()=>{
        setOpen((open)=>!open)
    }

   const getDetails = ()=>{
    handleClickOpen()
       dispatch({type:FETCH_COMPANY,payload:nameCompany})
   }
    const useStyles = makeStyles({
        modal: {
         display:'block',
         height:'90%',
          overflow:'scroll'
        },
        
        wrapper:{
            display:'grid',
            'grid-template-columns':'1fr 1fr',
            'grid-template-rows':'300px 50%',
            'grid-column-gap':'3%'
        },
        cost:{
            'grid-column':2,
            'grid-row':2
        },
        table:{
            'grid-column':1/2,
            'grid-row':1/3
        },
        
        btn:{
            width:'100%',
            height:70
        },
        btnClose:{
            color: '#E87866',
            cursor:'pointer',
            height:'7%',
            width:'7%',
            position:'fixed',
            top:'3%',
            right:'1%'
        }

      });
      const classes = useStyles();




      let nameCompany = card.securities.data[0][1];
    
        const handleDifferense = (OPEN,CLOSE) =>{
          
            
            return Number(((CLOSE-OPEN)/OPEN*100).toFixed(2))
        }

      
      const {promotions,dividends} = useSelector((state)=>state);







const data = [  ];
for(let i = 0; i<promotions.length; i++){
    
    data.push({ 
        tradeDate : promotions[i].TRADEDATE,
        [nameCompany]  : handleDifferense(promotions[i].OPEN,promotions[i].CLOSE)
    })

}

    

console.log(`дата`,data)

    const ImageIcon = () =>{
        if(nameCompany == "YNDX"){
            return(
                <img src={Yndx}
                 alt="Logo"
            />
            )
        }
        else if(nameCompany == "MTSS"){
            return(
                <img src={Mts}
                 alt="Logo"
            />
            )
        }
        else if(nameCompany == "SBCBA"){
            nameCompany = "SBER"
            return(
                <img src={Sber}
                 alt="Logo"
            />
            )
        }
    }

    return(
        
        <div>
            <Modal
        open={open}
        
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        
        >
            
            <div className={'modalCard '+ `${classes.modal}`}  >
            <div className={classes.wrapper}>

            
                
           
            <Dividends dividends={dividends}/>

            
            
            <CancelPresentationIcon color="primary" className={classes.btnClose} onClick={handleClickOpen} />
                     
            <Chart data={data} nameCompany={nameCompany}/>

            <div className={classes.cost}>
              <Promotions 
                promotions={promotions}
                data={data}
                nameCompany={nameCompany}
                />
            </div>
            
           </div>
            </div>

        </Modal>
        
  
        <div className="card"  >
            <header>
                <ImageIcon />
            </header>
            
                <p>название: <strong>{nameCompany}</strong></p>
                    <p>ID: {card.securities.data[0][0]} </p>
                    <p>secid: {card.securities.data[0][1]}</p>
                    
                    ​​​​
                   <p>regnumber: {card.securities.data[0][3]}</p>
                   
                   <p>ИНН: {card.securities.data[0][9]}</p>
                   <p>gosreg: {card.securities.data[0][11]}</p>
              
                <Button color="primary" className={classes.btn}
                  onClick={getDetails}
                  >
                        Подробнее
                </Button>           
        </div>
        </div>
    )
}





