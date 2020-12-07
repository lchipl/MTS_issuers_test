import axios from "axios"


export const Details = async(nameCompany) =>{
    const devidents = axios.get(`
    http://iss.moex.com/iss/securities/${nameCompany}/dividends.json?iss.json=extended`)
    .data()


    const chart = axios.get(`
    http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${nameCompany}.json?iss.json=extended&from=2020-01-01`)
    .data()
    return devidents, chart
}