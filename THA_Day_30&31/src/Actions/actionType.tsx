import {Menu} from '../components/Data'
import {dataInterface} from '../components/types'
export const dataInitialize=()=>{
    return {
        type:'INITIALIZE',
        payload:Menu
    }
}
export const itemDataSet=(itemData:dataInterface|unknown)=>{
    return {
        type:'SETITEM',
        payload:[itemData]
    }
}