import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    fontSize:10,
    maxWidth: 350,

  },
});


const dividents = 
[
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2013-08-14", "value": 5.22, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2014-07-07", "value": 18.6, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2014-10-14", "value": 6.2, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2015-07-07", "value": 19.56, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2015-10-14", "value": 5.61, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2016-07-05", "value": 14.01, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2016-10-14", "value": 11.99, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2017-07-10", "value": 15.6, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2017-10-13", "value": 10.4, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2018-07-09", "value": 23.4, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2018-10-09", "value": 2.6, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2019-07-09", "value": 19.98, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2019-10-14", "value": 8.68, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2020-01-10", "value": 13.25, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2020-07-09", "value": 20.57, "currencyid": "RUB"},
  {"secid": "MTSS", "isin": "RU0007775219", "registryclosedate": "2020-10-12", "value": 8.93, "currencyid": "RUB"}
  ]
  dividents.reverse()

export  const  Dividents = () => {
  const classes = useStyles();

  return (
      
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong>Дата</strong></TableCell>
            <TableCell align="center"><strong>Значение дивидента %</strong></TableCell>
            <TableCell align="center"><strong>Валюта?</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dividents.map((divident) => (
            <TableRow >
              
              <TableCell align="center">{divident.registryclosedate}</TableCell> 
              <TableCell align="center">{divident.value}</TableCell>
              <TableCell align="center">{divident.currencyid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
  );
}
