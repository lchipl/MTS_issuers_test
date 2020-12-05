import { GET_COMPANIES, GET_COMPANY, HIDE_LOADER, SET_LOADING } from "./types";

const initialState ={
    company:{},
    companies:[],
    loading:false
}

const handlers = {
    [GET_COMPANIES]:(state,action) =>({...state, companies:action.payload, loading:false}),
    [GET_COMPANY]:(state,action) =>({...state, post:action.payload, loading:false}),
    [SET_LOADING]:(state)=>({...state,  loading:true}),
    [HIDE_LOADER]:(state) =>({...state,loading:false}),
    DEFAULT:(state) => state
}

export const reducer = (state=initialState,action) =>{
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}