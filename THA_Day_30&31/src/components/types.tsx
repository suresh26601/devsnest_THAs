export interface dataInterface {
    id: number,
    title: string,
    category: string,
    price: number,
    img: string,
    desc: string,
    addItem?:number
}
export interface initialStateInterface{
    dataGallary:dataInterface[],
    itemData:dataInterface[],
    addToCart:dataInterface[]
}
// export interface IdataInitializeAction{
//     type:'INITIALIZE',
//     payload:dataInterface[]
// }
// export interface IitemDataSetAction{
//     type:'SETITEM',
//     payload:dataInterface[]
// }