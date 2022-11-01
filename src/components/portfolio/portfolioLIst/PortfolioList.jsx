import './gallery.scss'
import pic1 from "../../../assets/images/portfolio-1.jpg"
import pic2 from "../../../assets/images/portfolio-2.jpg"
import pic3 from "../../../assets/images/portfolio-3.jpg"
import pic4 from "../../../assets/images/portfolio-4.jpg"
import pic5 from "../../../assets/images/portfolio-5.jpg"
import pic6 from "../../../assets/images/portfolio-6.jpg"
import pic7 from "../../../assets/images/portfolio-7.jpg"
import pic8 from "../../../assets/images/portfolio-8.jpg"
import pic9 from "../../../assets/images/portfolio-9.jpg"
import pic10 from "../../../assets/images/portfolio-10.jpg"
import pic11 from "../../../assets/images/portfolio-11.jpg"
import pic12 from "../../../assets/images/portfolio-12.jpg"
import { useState } from 'react'

function PortfolioList() {
    let arr = [{
        id: Date.now(),
        img: pic1,
        type: 'desing',
        name: 1,
    },
    {
        id: Date.now(),
        img: pic2,
        type: 'app',
        name: 2,
    },
    {
        id: Date.now(),
        img: pic3,
        type: 'lii',
        name: 3,
    },
    {
        id: Date.now(),
        img: pic4,
        type: 'Branding',
        name: 4,
    },
    {
        id: Date.now(),
        img: pic5,
        type: 'Photography',
        name: 5,
    },
    {
        id: Date.now(),
        img: pic6,
        type: 'lii ',
        name: 6,
    },
    {
        id: Date.now(),
        img: pic7,
        type: 'app',
        name: 7,
    },
    {
        id: Date.now(),
        img: pic8,
        type: 'Branding',
        name: 8,
    },
    {
        id: Date.now(),
        img: pic9,
        type: 'app',
        name: 9,
    },
    {
        id: Date.now(),
        img: pic10,
        type: 'Photography',
        name: 10,
    },
    {
        id: Date.now(),
        img: pic11,
        type: 'Branding',
        name: 11,
    },
    {
        id: Date.now(),
        img: pic12,
        type: 'desing',
        name: 12,
    },
    ]

    let [data, setData] = useState(arr)
    let [buttons, setButtons] = useState([])
    let [c, setC] = useState(4);

    let row = function (params, count = 4) {
        var arrData = params.slice(0, count).map((item) => {
            return <div key={item.name} className="photo-container">
                <div className='photo'><img src={item.img} /></div>
                <div className='hover-photo'>
                    <h6 className='hh6'></h6>
                </div>
            </div>
        });
        return arrData

    }


    let filter = (type) => {
        if (type == "desing") {
            setData(arr)



        }
        let x = arr.slice(0, c).filter((par) => {
            return par.type.includes(type)
        }).reverse()

        setData(x)
    }



    return (
        <div className='listComponent'>
            <nav className='navbarList'>
                <div className='listItems G-container'>
                    <button className='listItem'
                    //  style={{ backgroundColor: "#6fc754" }}
                        button={buttons} onClick={() => { setData(arr) }}><a>All</a></button>
                    <button className='listItem aa'
                        button={buttons} onClick={() => { filter("desing") }}><a>Web design</a></button>
                    <button className='listItem'
                        button={buttons} onClick={() => { filter("app") }}><a>Mobile app</a></button>
                    <button className='listItem'
                        button={buttons} onClick={() => { filter("lii") }}><a>Illustration</a></button>
                    <button className='listItem'
                        button={buttons} onClick={() => { filter("Branding") }}><a>Branding</a></button>
                    <button className='listItem'
                        button={buttons} onClick={() => { filter("Photography") }}><a>Photography</a></button>
                </div>
            </nav>

            <div className='photos G-container'>
                {
                    row(data, c)

                }

            </div>

            <button className='portfolioBtn' onClick={() => {
                c += 4;
                row(arr, setC(c));
                console.log(row(arr, c));
                // alert(c)
                // switch(){}
                if (c == 16) {
                    setC(4)
                }
            }}>Learn more</button>
        </div>
    )
}
export default PortfolioList