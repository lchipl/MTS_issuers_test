import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const dividends = 
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
 

export  function List() {
  const classes = useStyles();

  return (
    
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell align="right">Значение дивидента</TableCell>
            <TableCell align="right">Валюта?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dividends.map((dividend) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{dividend.registryclosedate}</TableCell> 
              <TableCell align="right">{dividend.value}</TableCell>
              <TableCell align="right">{dividend.currencyid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
  );
}
