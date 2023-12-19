
export const decreaseQty=(id)=>{
    return{
        type:"DECREASEQTY",
        payload:id
    }
}
export const addQty=(id)=>{
    return{
        type:"ADDQTY",
        payload:id
    }
}