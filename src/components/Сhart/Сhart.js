import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-03", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 7141, "VALUE": 837486743, "OPEN": 321, "LOW": 320.65, "HIGH": 322.85, "LEGALCLOSEPRICE": 322.1, "WAPRICE": 322.05, "CLOSE": 322.1, "VOLUME": 2600480, "MARKETPRICE2": 322.05, "MARKETPRICE3": 322.05, "ADMITTEDQUOTE": 322.1, "MP2VALTRD": 837486743, "MARKETPRICE3TRADESVALUE": 837486743, "ADMITTEDVALUE": 837486743, "WAVAL": null, "TRADINGSESSION": 3},
// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-06", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 6158, "VALUE": 396055461.5, "OPEN": 322.7, "LOW": 321.3, "HIGH": 323.45, "LEGALCLOSEPRICE": 323.45, "WAPRICE": 322.6, "CLOSE": 323.45, "VOLUME": 1227790, "MARKETPRICE2": 322.6, "MARKETPRICE3": 322.6, "ADMITTEDQUOTE": 323.45, "MP2VALTRD": 396055461.5, "MARKETPRICE3TRADESVALUE": 396055461.5, "ADMITTEDVALUE": 396055461.5, "WAVAL": null, "TRADINGSESSION": 3},
// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-08", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 11294, "VALUE": 1236334353.5, "OPEN": 323.45, "LOW": 321.7, "HIGH": 328.5, "LEGALCLOSEPRICE": 328.15, "WAPRICE": 325.25, "CLOSE": 328.15, "VOLUME": 3801350, "MARKETPRICE2": 325.25, "MARKETPRICE3": 325.25, "ADMITTEDQUOTE": 328.15, "MP2VALTRD": 1236334353.5, "MARKETPRICE3TRADESVALUE": 1236334353.5, "ADMITTEDVALUE": 1236334353.5, "WAVAL": null, "TRADINGSESSION": 3},
// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-09", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 15157, "VALUE": 1196089802.5, "OPEN": 318.4, "LOW": 315.65, "HIGH": 324.4, "LEGALCLOSEPRICE": 324.3, "WAPRICE": 321.4, "CLOSE": 324.3, "VOLUME": 3722390, "MARKETPRICE2": 321.3, "MARKETPRICE3": 321.3, "ADMITTEDQUOTE": 324.3, "MP2VALTRD": 1196089802.5, "MARKETPRICE3TRADESVALUE": 1196089802.5, "ADMITTEDVALUE": 1196089802.5, "WAVAL": null, "TRADINGSESSION": 3},
// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-10", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 12840, "VALUE": 1195854472, "OPEN": 324.15, "LOW": 319.25, "HIGH": 324.15, "LEGALCLOSEPRICE": 319.4, "WAPRICE": 321.1, "CLOSE": 319.4, "VOLUME": 3723770, "MARKETPRICE2": 321.15, "MARKETPRICE3": 321.15, "ADMITTEDQUOTE": 319.4, "MP2VALTRD": 1195854472, "MARKETPRICE3TRADESVALUE": 1195854472, "ADMITTEDVALUE": 1195854472, "WAVAL": null, "TRADINGSESSION": 3},
// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-13", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 11759, "VALUE": 948947158, "OPEN": 319.4, "LOW": 316.65, "HIGH": 320.5, "LEGALCLOSEPRICE": 319.45, "WAPRICE": 318.45, "CLOSE": 319.45, "VOLUME": 2979930, "MARKETPRICE2": 318.45, "MARKETPRICE3": 318.45, "ADMITTEDQUOTE": 319.45, "MP2VALTRD": 948947158, "MARKETPRICE3TRADESVALUE": 948947158, "ADMITTEDVALUE": 948947158, "WAVAL": null, "TRADINGSESSION": 3},
// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-14", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 8604, "VALUE": 858587028.5, "OPEN": 319.65, "LOW": 317.2, "HIGH": 321.4, "LEGALCLOSEPRICE": 317.3, "WAPRICE": 319.5, "CLOSE": 317.3, "VOLUME": 2687460, "MARKETPRICE2": 319.5, "MARKETPRICE3": 319.5, "ADMITTEDQUOTE": 317.3, "MP2VALTRD": 858587028.5, "MARKETPRICE3TRADESVALUE": 858587028.5, "ADMITTEDVALUE": 858587028.5, "WAVAL": null, "TRADINGSESSION": 3},
// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-15", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 9399, "VALUE": 697688247, "OPEN": 317, "LOW": 315.4, "HIGH": 319.55, "LEGALCLOSEPRICE": 318.65, "WAPRICE": 317.8, "CLOSE": 318.65, "VOLUME": 2195450, "MARKETPRICE2": 317.8, "MARKETPRICE3": 317.8, "ADMITTEDQUOTE": 318.65, "MP2VALTRD": 697688247, "MARKETPRICE3TRADESVALUE": 697688247, "ADMITTEDVALUE": 697688247, "WAVAL": null, "TRADINGSESSION": 3},
// {"BOARDID": "TQBR", "TRADEDATE": "2020-01-16", "SHORTNAME": "МТС-ао", "SECID": "MTSS", "NUMTRADES": 7436, "VALUE": 584029748.5, "OPEN": 318.65, "LOW": 317, "HIGH": 319.8, "LEGALCLOSEPRICE": 319.8, "WAPRICE": 318.55, "CLOSE": 319.8, "VOLUME": 1833270, "MARKETPRICE2": 318.55, "MARKETPRICE3": 318.55, "ADMITTEDQUOTE": 319.8, "MP2VALTRD": 584029748.5, "MARKETPRICE3TRADESVALUE": 584029748.5, "ADMITTEDVALUE": 584029748.5, "WAVAL": null, "TRADINGSESSION": 3},


const data = [
 
  
];

export default class Chart extends PureComponent {

 
  render() {


    return (
      <LineChart
        width={500}
        height={300}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="MTS" stroke="#8884d8" activeDot={{ r: 9}} />
        
      </LineChart>
    );
  }
}
