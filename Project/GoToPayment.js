import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import { useSelector } from "react-redux";
function GoToPayment() {
    useEffect(() => {
        alert("האם אתה בטוח שברצונך לסיים את הקניה?")
    });
    const cartArr = useSelector((state) => state.CartReducer);
    let price=0;
    // debugger
        for (let i = 0; i < cartArr.length; i++) {
        price = price + cartArr[i].price;

    }
    console.log(`price=${price}`)
    return (
        <center>
            {cartArr.map((item, index) => (
                <div>
                    <Card style={{ width: '18rem', marginTop: 10 }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                ₪ {item.price}<br></br>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                </div>
            ))}
            <h3>סך הכל לתשלום: {price} ש"ח</h3>
            <br></br>
            <button>לתשלום עכשיו</button>
        </center>
    );
};
export default GoToPayment;