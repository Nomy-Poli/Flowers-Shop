import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Details from './Details';
export default function Shop() {
    const products = useSelector((state) => state.Products)
    return (<div>
        <Row xs={1} md={5} className="g-4">
            {products.map((item) => (
                <Col>
                    <Card >
                        <Card.Img variant="top" src={item.image} width="100" height="350" />
                        <Card.Body>
                            <Card.Title><center>{item.name}</center></Card.Title>
                            <Card.Text>
                                <center>
                                    במלאי:   {item.qty} יחידות

                                    <Details id={item.id}></Details>
                                </center>
                                <br></br>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                <br></br>
                </Col>

            ))}
        </Row>


    </div>)

}
