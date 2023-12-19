import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CartReducer from "../redux/reducers/CartReducer";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { addQty, decreaseQty } from "../redux/actions/ProductAction";
import { addToCart, deleteFromCart } from "../redux/actions/CartAction";
import CardGroup from 'react-bootstrap/CardGroup'
import GoToPayment from "./GoToPayment";
function Cart() {
    const [show, setShow] = useState(false);
    const cartArr = useSelector((state) => state.CartReducer)
    console.log(cartArr);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            {cartArr.length == 0 ?
                <center>
                    <div>
                        <h1><br></br></h1>
                        <h1> ,עדיין לא הזמנת שום פרח או עיצוב</h1>
                        <br></br>
                        <h1> אתה יכול להזמין עכשיו</h1><br></br><h1><span onClick={() => { navigate(-1) }}>✅</span></h1>
                        <br></br><br></br><br></br><br></br><br></br>
                    </div>
                </center>
                :
                <center>
                    <div>
                        <h1><br></br></h1>
                        {cartArr.map((item, index) => (
                            <div>

                                <Card style={{ width: '18rem', marginTop: 10 }}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            ₪ {item.price}<br></br>
                                        </Card.Text>
                                        <Button style={{ backgroundColor: 'Black' }} class="plusButton" onClick={(e) => {
                                            e.preventDefault();
                                            setShow(false);
                                            dispatch(addToCart((item.id)));
                                            dispatch(decreaseQty((item.id)))
                                        }}>➕</Button>
                                        <br></br>{item.qty_cart} <br></br>
                                        <Button style={{ backgroundColor: 'Black' }} onClick={(e) => {
                                            e.preventDefault();
                                            setShow(false);
                                            dispatch(addQty((item.id)));
                                            dispatch(deleteFromCart((item.id)));
                                        }}
                                        > ➖</Button>
                                        {/* </center> */}
                                    </Card.Body>
                                </Card><br></br>
                            </div>


                        )
                        )

                        }
                        <Button onClick={() => { navigate("/GoToPayment") }} style={{ color: "white", backgroundColor: "green" }}>Payment</Button>
                        <br></br>
                    </div>
                </center>
            }
        </div>

    );
}
export default Cart;
