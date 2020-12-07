import axios from "axios"


export const Details = async(nameCompany) =>{
    const devidents = axios.get(`
    http://iss.moex.com/iss/securities/${nameCompany}/dividends.json?iss.json=extended`)
    .data()


    
    return devidents
}