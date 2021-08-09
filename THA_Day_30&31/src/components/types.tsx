export interface dataInterface {
    id: number,
    title: string,
    category: string,
    price: number,
    img: string,
    desc: string 
}
export interface initialStateInterface{
    dataGallary:dataInterface[],
    itemData:dataInterface[]
}
// export interface IdataInitializeAction{
//     type:'INITIALIZE',
//     payload:dataInterface[]
// }
// export interface IitemDataSetAction{
//     type:'SETITEM',
//     payload:dataInterface[]
// }