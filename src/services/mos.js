import axios from 'axios';




export const MosApi =async () =>{
    const res = await axios.get('https://iss.moex.com/iss/securities.json?q=MTSS')
    const result = await res.data;
    console.log('получен мтс', result)
    return result
}