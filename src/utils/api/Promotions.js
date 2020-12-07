import axios from "axios"

  export const   Promotions = (nameCompany)=>{
const chart = axios.get(`
    http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${nameCompany}.json?iss.json=extended&from=2020-01-01`)
    .data()
    return chart
  }