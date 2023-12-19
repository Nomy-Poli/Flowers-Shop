import { useSelector } from "react-redux/es/exports";
import { useNavigate } from 'react-router-dom';
import Cart from "../../Project/Cart";
const cart = [];
const CartReducer = (state = cart, action) => {
    // const cartArr = useSelector((state) => state.cart)
    switch (action.type) {
        case "ADDTOCART": {
            const pro = state.find(p => p.id === action.payload)
            if (pro !== undefined) {
                pro.qty_cart += 1;
            }
            else {
                cart.push(action.payload);
            }
            console.log(`from add to cart: ${cart}`)
            return state

        }
        case "DELETEFROMCART": {
            const pro = state.find(p => p.id === action.payload)
            if (pro.qty_cart > 0) {
                pro.qty_cart -= 1;
            }
            else {
                state = state.filter(p => p.id !== action.payload)
            }
            return state
        }
    }
    return state;
};
export default CartReducer;