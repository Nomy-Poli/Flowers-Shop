import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToCart } from '../redux/actions/CartAction';
import { decreaseQty } from '../redux/actions/ProductAction';
import { useDispatch } from 'react-redux';
export default function Details(props) {
    const products = useSelector((state) => state.Products)
    const thisItem = products.filter(p => {
        return p.id === props.id;
    })
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            {<Button variant="outline-success" onClick={handleShow}>
                פרטים
            </Button>}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                <center>
                    <Modal.Title>
                        
                            <img src={thisItem[0].image} width="200"></img><br></br>
                            
                       
                    </Modal.Title>
                    </center>
                </Modal.Header>
                <Modal.Body >
                    <center>
                    <h2>{thisItem[0].name}</h2><br></br>
                        <h6>{thisItem[0].description}</h6> <br></br><br></br><br></br>
                      <h5>  מחיר:  {thisItem[0].price}₪</h5>

                    </center>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="outline-danger" onClick={handleClose}>
                        X סגור
                    </Button>
                    <Button variant="outline-success" onClick={(e) => {
                        e.preventDefault();
                        console.log(thisItem[0].qty_cart);
                        dispatch(decreaseQty(thisItem[0].id))
                        console.log(thisItem[0].qty);
                        dispatch(addToCart(thisItem[0]))
                        console.log(thisItem[0].id);
                        handleClose();
                        
                    }}>
                        להוסיף לעגלה🛒
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}