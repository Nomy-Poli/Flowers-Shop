import React from "react";
import about from '../redux/pictures/about.jpg';
function About() {
    const bk = {
        img: about
    }
    return (
        <>
            <center>
                <br></br><br></br>
                <h4>כבר מאז 1993 אנחנו כאן בשבילכם במסירות, באכפתיות ובחום</h4>
                <h4>כדי שתוכלו למצוא את הפרחים המדויקים בשבילכם</h4>
                <h4>ולהנות מיופי הבריאה</h4>
                <br></br>
                <img src={bk.img}></img>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
            </center>
        </>
    );
}
export default About;