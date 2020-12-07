import {takeEvery, put,call, all} from 'redux-saga/effects';
import { MosApi } from '../utils/api/api_info';
import { GET_COMPANIES, GET_COMPANY,FETCH_COMPANY, HIDE_LOADER, SET_LOADING, FETCH_COMPANIES } from "./types";

 function* sagaFetchCompanies(){
  yield  takeEvery(FETCH_COMPANIES,sagaWorkerCompanies)
}



function* sagaWorkerCompanies(){
    
    try{
      yield put({type:SET_LOADING})  
      const payload = yield call(MosApi)
      yield put({type:GET_COMPANIES,payload})
      
      yield put({type:HIDE_LOADER})
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}



 function* sagaFetchCompany(){
  yield  takeEvery(FETCH_COMPANY,sagaWorkerCompany)
}



function* sagaWorkerCompany(){
    
    try{
      yield put({type:SET_LOADING}) 
      //  const payload = yield call(//)
      // yield put({type:GET_COMPANY,payload})
      
      yield put({type:HIDE_LOADER})
    }catch(e){
      console.log('ошибОчка', e)
    }
    
}

export function* rootSaga() {
  yield all([
    sagaFetchCompanies(),
    sagaFetchCompany()
  ])
};