import {takeEvery, put,call, all, takeLatest} from 'redux-saga/effects';
import { MosApi } from '../utils/api/api_info';
import { getDevidents } from '../utils/api/devidents';
import { getPromotions } from '../utils/api/Promotions';
import { GET_COMPANIES, FETCH_COMPANY,  HIDE_LOADER, SET_LOADING, FETCH_COMPANIES, GET_DEVIDENTS, GET_PROMOTIONS } from "./types";

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
  yield  takeLatest(FETCH_COMPANY,sagaWorkerCompany)
}



function* sagaWorkerCompany(){
    
    try{

      yield put({type:SET_LOADING}) 
       const devidents = yield call(getDevidents)
       const promotions = yield call(getPromotions)
      yield put({type:GET_DEVIDENTS,devidents})
      yield put({type:GET_PROMOTIONS,promotions})
      
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