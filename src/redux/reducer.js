import { GET_COMPANIES, GET_COMPANY, HIDE_LOADER, SET_LOADING,FETCH_COMPANY } from "./types";

const initialState ={
    companyDetailts:{},
    companies:[],
    loading:false,
    nameCompany:''
}

const handlers = {
    [GET_COMPANIES]:(state,action) =>({...state, companies:action.payload, loading:false}),
    [GET_COMPANY]:(state,action) =>({...state, companyDetailts:action.payload, loading:false}),
    [SET_LOADING]:(state)=>({...state,  loading:true}),
    [HIDE_LOADER]:(state) =>({...state,loading:false}),
    [FETCH_COMPANY]:(state,action) =>({...state, nameCompany:action.payload}),
    DEFAULT:(state) => state
}

export const reducer = (state=initialState,action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}