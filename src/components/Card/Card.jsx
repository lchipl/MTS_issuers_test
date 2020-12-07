import { Button,makeStyles,Modal } from '@material-ui/core';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_COMPANY } from '../../redux/types';
import { Promotions } from '../Promotions/Promotions';
import { Dividends } from '../Table/Dividends';
import Chart from '../Сhart/Сhart';

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


      const percent = [];


      let nameCompany = card.securities.data[0][1];
    
        const handleDifferense = (OPEN,CLOSE) =>{
            let res = Number(((CLOSE-OPEN)/OPEN*100).toFixed(2))
            percent.push(res)
            return res
        }

      
      const {promotions,dividends} = useSelector((state)=>state);


let colorClassName = ''
if(nameCompany == "YNDX"){
    colorClassName += ' yndx'
}
else if(nameCompany == "MTSS"){
    colorClassName += ' mts'
}
else if(nameCompany == "SBCBA"){
    nameCompany = "SBER"
    colorClassName += 'sber'
}



const data = [  ];
for(let i = 0; i<promotions.length; i++){
    
    data.push({ 
        tradeDate : promotions[i].TRADEDATE,
        [nameCompany]  : handleDifferense(promotions[i].OPEN,promotions[i].CLOSE)
    })

}

    

console.log(`дата`,data)

    

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
        
  
        <div className={"card"}  >
            <div className={colorClassName}>
                <p>​​​​name: <strong>{nameCompany}</strong></p>
                    <p>id: {card.securities.data[0][0]} </p>
                    <p>secid: {card.securities.data[0][1]}</p>
                    <p>shortname:</p> 
                    ​​​​
                   <p>regnumber:</p>
                   
                   <p>emitent_inn: {card.securities.data[0][9]}</p>
                   <p>gosreg: {card.securities.data[0][11]}</p>
             </div>    
                <Button color="primary" className={classes.btn}
                  onClick={getDetails}
                  >
                        Подробнее
                </Button>           
        </div>
        </div>
    )
}





