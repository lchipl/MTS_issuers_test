import axios from "axios"


export const getDevidents = async(nameCompany) =>{
    const {data} =   await axios.get(`
    http://iss.moex.com/iss/securities/${nameCompany}/dividends.json?iss.json=extended`)
    


    
    return data
}