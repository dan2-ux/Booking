import NavBar from '../compoments/NavBar'
import Header from '../compoments/Header'
import MailList from '../compoments/MailList'
import Footer from '../compoments/Footer'
import { useParams } from 'react-router-dom'
import Data from '../compoments/Data'
import { useContext, useState } from 'react'

export default function Home({rec}){
    const {id} = useParams()
    const data = Data[id]
    const recive = rec
    const [night , sNight] = useState(recive[1] > 0 ? recive[1] : 1)
    const [child, sChild ] = useState(recive[3])
    const [adult, sAdult] = useState(recive[2])
    const [room , sRoom ] = useState(recive[4])
    console.log(recive)

    const [sliderNumber , setSliderNumber] = useState(0)
    const [open, sOpen] = useState(0)

    const [val1, sVal1]= useState(0)
    return(
        <div>
            <NavBar/>
            <Header dis={false}/>
            <div className=' container m-5 d-felx flex-column m-0 p-0'>
                <div className=' d-flex justify-content-between'>
                    <span className=' fs-1 fw-bolder'>{data.name}</span>
                    <button className=' btn btn-primary fw-bold'>Reserve</button>
                </div>
                <div>
                    <span>
                        <a style={{textDecoration: "none"}} target='blank' href={`https://en.wikipedia.org/wiki/${data.city}`}>
                            <i className="fa-solid fa-location-dot"></i>
                            {data.city}
                        </a>
                    </span>
                </div>
                <div>
                    <span className=' fs-4 text-danger'>
                        Price for a night is ${data.price}
                    </span>
                </div>
            </div>
            <div className=' container '>
                <div className=' row'>
                    <div className=' col-12 d-flex row p-0'>
                        <div className=' col-9 p-1'>
                            <img value={val1}
                            onClick={() => doClick(1)}
                            src={data.img[0]}  className=' h-100 w-100' 
                            alt="" />
                        </div>
                        <div className=' p-1 col-3 d-flex flex-column gap-0'>
                            <img onClick={() => doClick(2)}
                            src={data.img[1]} className=' h-100 w-100' 
                            alt="" />
                            <img onClick={() => doClick(3)}
                            src={data.img[2]} className=' h-100 w-100' 
                            alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container mt-5 mb-5 pb-5'>
                <div className=' row m-0 p-0'>
                    <div className=' col-lg-9 col-7 d-flex flex-column p-0'>
                        <span className=' fw-bold fw-bolder fs-1 mb-5'>Stay a night at {data.city}</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quisquam recusandae, unde alias, 
                        voluptatibus ipsum asperiores maiores tenetur totam tempore natus nostrum, magnam optio praesentium.
                         Debitis voluptates consequuntur inventore dolorem.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quisquam recusandae, unde alias, 
                        voluptatibus ipsum asperiores maiores tenetur totam tempore natus nostrum, magnam optio praesentium.
                         Debitis voluptates consequuntur inventore dolorem.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quisquam recusandae, unde alias, 
                        voluptatibus ipsum asperiores maiores tenetur totam tempore natus nostrum, magnam optio praesentium.
                         Debitis voluptates consequuntur inventore dolorem.
                    </div>
                    <div className=' col-lg-3 col-5 d-flex  flex-column m-0 ps-5 pe-5 pt-5 bg-secondary rounded rounded-5'>
                        <div className=' row'>
                            <span className=' col-9 fw-bold text-white'> {room > 1 ? `${room} rooms` : ""} For {night > 1 ? "" : "a"} {night}-night stay {child > 0 ? child > 1 ? `with ${child} childs`: `with ${child} child`: "" } </span>
                            <span className=' col-3 text-white'>${data.price * night * room}</span>
                        </div>
                        <div className=' m-5 d-flex justify-content-center align-items-center'>
                            <button className=' btn btn-primary'>Reserve NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}