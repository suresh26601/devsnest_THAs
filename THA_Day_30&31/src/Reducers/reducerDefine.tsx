import {initialStateInterface,dataInterface} from '../components/types'
const initialState :initialStateInterface ={
    dataGallary:[],
    itemData:[]
}

export const InitialStateReducers=(state=initialState,action:{type:string,payload:dataInterface[]}):initialStateInterface=>{
    switch (action.type) {
        case 'INITIALIZE':
            return {...state,dataGallary:action.payload}
        case 'SETITEM':
            return {...state,itemData:action.payload}
        default:
            return state;
    }
}