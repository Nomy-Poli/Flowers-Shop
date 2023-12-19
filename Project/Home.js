import React from "react";
import home from '../redux/pictures/home.webp';
import logo from '../redux/pictures/logo.png'
function Home() {
    const bk = {
        img: home,
        logo: logo
    }
    return (
        // <div style={{backgroundColor: '#f8f8d1'}}>
        <div>
            <center>
                {/* <img src={bk.logo} width="200"></img> */}
                <br></br><br></br>
                <h4 style={{color: 'white'}}>ברוכים הבאים לחנות הפרחים שלנו</h4>
                <br></br>
                <img src={bk.img}></img>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
            </center>
        </div>
    );
}
export default Home;
