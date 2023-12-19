import { useState } from "react";
import p1 from '../pictures/p1.png'
import p2 from '../pictures/p2.png'
import p3 from '../pictures/p3.png'
import p4 from '../pictures/p4.png'
import p5 from '../pictures/p5.png'
import p6 from '../pictures/p6.png'
import p7 from '../pictures/p7.png'
import p8 from '../pictures/p8.png'
import p9 from '../pictures/p9.png'
import p10 from '../pictures/p10.png'
import p11 from '../pictures/p11.png'
import p12 from '../pictures/p12.png'
import p13 from '../pictures/p13.png'
import p14 from '../pictures/p14.png'
import p15 from '../pictures/p15.png'
import p16 from '../pictures/p16.png'
import p17 from '../pictures/p17.png'
import p18 from '../pictures/p18.png'
import p19 from '../pictures/p19.png'
import p20 from '../pictures/p20.png'



const arr = [
    {
        id: "7",
        name: "כתר",
        qty: 37,
        qty_cart: 1,
        image: p7,
        price: 250.00,
        description: "כתר ייחודי ליום הולדת. מתנה מרגשת במיוחד"
    },


    {
        id: "3",
        name: "זר ססגוני",
        qty: 13,
        qty_cart: 1,
        image: p3,
        price: 120.00,
        description: "זר עליז, מלא צבע. משנה כל שולחן ממבט ראשון, נותן חיות וגוון מסוג אחר"
    },
    {
        id: "6",
        name: "סל ורוד-ירוק-לבן",
        qty: 8,
        qty_cart: 1,
        image: p6,
        price: 550.00,
        description: "סל יחודי שבתוכו עיצוב ססגוני בצבעי ירוק- ורוד ולבן. מתנה יוקרתית ומכובדת"
    },
    {
        id: "5",
        name: "זר מיוחד",
        qty: 26,
        qty_cart: 1,
        image: p5,
        price: 299.99,
        description: "זר חיוני בצבעים עליזים ויוקרתיים כאחד. "
    },
    {
        id: "4",
        name: "עיצוב פרימיום",
        qty: 7,
        qty_cart: 1,
        image: p4,
        price: 700.00,
        description: "עיצוב יוקרתי במיוחד הכולל כלי עץ בשילוב פרחים חיים ושאינם. מתנה יוקרתית ומכבדת במיוחד"
    },
    {
        id: "1",
        name: "זר צהוב- ירוק",
        qty: 25,
        qty_cart: 1,
        image: p1,
        price: 199.99,
        description: "זר מיוחד בצבעי צהוב, כתום וירוק. זר חי, צבעוני ומשמח. משדר אוירה נעימה, פעילה ומרגשת"
    },
    {
        id: "2",
        name: "זר ורדים אדום- לבן",
        qty: 12,
        qty_cart: 1,
        image: p2,
        price: 700.00,
        description: "זר אלגנטי, מיוחד ועשיר בצבעי אדום ולבן עם נגיעות ירוקות. הוורד הוא פרח שמשדר יוקרע ורוגע. זר שישמח כל מי שתתנו לו במתנה ויעשה לו מצב רוח טוב."
    },
    {
        id: "9",
        name: "עיצוב לשנה מתוקה ",
        qty: 5,
        qty_cart: 1,
        image: p9,
        price: 750.00,
        description: "עיצוב יוקרתי בשילוב תפוחים ובקבוק דבש טבעי 100%. משלוח מכובד לשנה טובה ומבורכת"
    }, {
        id: "8",
        name: "זר אלגנטי",
        qty: 15,
        qty_cart: 1,
        image: p8,
        price: 320.00,
        description: "זר אלגנטי, עיצוב בקו נקי. צבעי לבן, בורדו וצהוב. מקפיץ כל אירוע"
    },
    {
        id: "10",
        name: "עציץ יוקרתי",
        qty: 57,
        qty_cart: 1,
        image: p10,
        price: 479.99,
        description: "כלי יוקרתי בגוון ברונזה שבתוכו שושנים לבנות יוצרים את יחד עציץ שאי אפשר לעמוד בו"
    },
    {
        id: "11",
        name: "מרכז שולחן עליז",
        qty: 11,
        qty_cart: 1,
        image: p11,
        price: 850.00,
        description: "מרכז שולחן צבעוני בגווני כתום. משדרג כל שולחן, משמח כל מקבל, מכבד כל נותן"
    },
    {
        id: "12",
        name: "זר מענין",
        qty: 23,
        qty_cart: 1,
        image: p12,
        price: 389.99,
        description: "זר ייחודי, שונה, מקורי ומענין. משהו שלא רואים הרבה"
    },
    {
        id: "13",
        name: "מרכז שולחן",
        qty: 17,
        qty_cart:1,
        image: p13,
        price: 650.00,
        description: "מרכז שולחן לאירועים. סגנון יוקרתי ומכובד. כלי גבוה מאד ומרשים"
    },
    {
        id: "14",
        name: "עציצי אמבטיה",
        qty: 15,
        qty_cart: 1,
        image: p14,
        price: 220.00,
        description: "זוג עציצונים בכלי חרסינה לאמבטיה בסטייל, עושה מצב- רוח"
    },
    {
        id: "15",
        name: "מגש פרחים",
        qty: 21,
        qty_cart: 1,
        image: p15,
        price: 570.00,
        description: "מגש פרחים יוקרתי בשילוב פרחים חיים. מתנה שמכבד לתת ושווה לקבל"
    },
    {
        id: "16",
        name: "עיצוב יוקרתי",
        qty: 34,
        qty_cart: 1,
        image: p16,
        price: 900.90,
        description: "עיצוב אלגנטי של פרחיים צבעוניים בגווני אדום. לאנשים ששווה להשקיע"
    },
    {
        id: "17",
        name: "זר כתמתם",
        qty: 17,
        qty_cart:1,
        image: p17,
        price: 830.00,
        description: "זר קלאסי, אהוב על כולם בגווני כתום- לבן. משלב ייחודיות צועקת יחד עם טעם קלאסי, עדין"
    },
    {
        id: "18",
        name: "קונוס ריחני",
        qty: 11,
        qty_cart: 1,
        image: p18,
        price: 139.90,
        description: "פרחים מיובשים, ריחניים במיוחד בתוך קונוס. מתנה מפנקת"
    },
    {
        id: "19",
        name: "זר סחלבים",
        qty: 13,
        qty_cart: 1,
        image: p19,
        price: 890.90,
        description: "זר סחלבים מיוחד ומקורי בנגיעות אדמדמות"
    },
    {
        id: "20",
        name: "זר ורדים",
        qty: 2,
        qty_cart: 1,
        image: p20,
        price: 0,
        description: ""
    },

];
const Products = (state = arr, action) => {
    switch (action.type) {
        //להוריד כמות מוצר בחנות
        case ("DECREASEQTY"): {
            const product = arr.find(p => p.id == action.payload)
            if (product.qty == 0) {
                alert("המוצר כבר לא קיים במלאי")
            }
            else if (product.qty > 0) {
                product.qty -= 1;

            }

            return state;
        }
        //להוסיף כמות מוצר בחנות
        case (action.type === "ADDQTY"): {
            const product = arr.find(p => p.id == action.payload)
            if (product.qty == 0) {
                alert("המוצר כבר לא קיים במלאי")
            }
            product.qty += 1;
            return state;
        }

    }
    return state;

}
export default Products;