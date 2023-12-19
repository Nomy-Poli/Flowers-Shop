import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { GiFlowerPot } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
function Navbar() {
    const navigate = useNavigate();
    const cartArr = useSelector((state) => state.CartReducer)
    return (
        <Nav fill variant="tabs" defaultActiveKey="">
            <Nav.Item>
                <Nav.Link onClick={() => { navigate("") }}><h1  style={{color: 'Black'}}><GoHome/></h1><br></br></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => { navigate("/Cart") }}><h1 style={{color: 'Black'}}><AiOutlineShoppingCart /></h1><Badge bg="secondary">{cartArr.length}</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => { navigate("/Shop") }}><h1 style={{color: 'Black'}}><GiFlowerPot/></h1><br></br></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => { navigate("/About") }}><h1 style={{color: 'Black'}}><BiMessageRoundedDetail/></h1><br></br></Nav.Link>
            </Nav.Item>
            <br></br><br></br><br></br>
        </Nav>
    );
}

export default Navbar;
//cart icon:
{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart"
                    viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg> */}