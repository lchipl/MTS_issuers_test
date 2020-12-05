import {takeEvery, put,call} from 'redux-saga/effects';
import { MosApi } from '../utils/api/api_info';
import { GET_COMPANIES, GET_COMPANY, HIDE_LOADER, SET_LOADING, FETCH_COMPANIES } from "./types";

export function* sagaFetchCompanies(){
  yield  takeEvery(FETCH_COMPANIES,sagaWorkerCompanies)
}



function* sagaWorkerCompanies(){
    
    try{
      yield put({type:SET_LOADING})  // показать loader 
      const payload = yield call(MosApi)
      yield put({type:GET_COMPANIES,payload})
      
      yield put({type:HIDE_LOADER})
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}