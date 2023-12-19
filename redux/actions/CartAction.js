export const addToCart = (id) => {
    return {
        type: "ADDTOCART",
        payload: id,

    }
}
export const deleteFromCart = (id) => {
    return {
        type: "DELETEFROMCART",
        payload: id
    }
}

