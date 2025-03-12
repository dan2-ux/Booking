import React, { useEffect, useState } from 'react'
import hotel from '../assets/hotelType/hotel.jpg'
import apartment from '../assets/hotelType/aparment.jpg'
import resort from '../assets/hotelType/resort.jpg'
import villa from '../assets/hotelType/villa.jpg'
import cabin from '../assets/hotelType/cabin.webp'

const PropertyList = () => {
    const [num, sNum] = useState(0)
    const data = [
        {img: hotel, name: "Hotels", room: "100 rooms"},
        {img: apartment, name: "Aparments", room: "150 rooms"},
        {img: resort, name: "Resorts", room: "70 rooms"},
        {img: villa, name: "Villa", room: "200 rooms"},
        {img: cabin, name: "Cabin", room: "115 rooms"},
    ]

    useEffect(() => {
        const increase = setInterval(() => {
            sNum(num => (num + 1) % data.length)
        }, 5000);
        return () => clearInterval(increase)
    },[num])
    const [hold, sHold] = useState(null)
    const display = data[num]
    return (
        <div className=' container mb-5' >
            <div style={{ height: "20em", width: "25rem" }} className="row ">
                <div className="col-12 position-relative " style={{border: "3px"}}>
                    <div className=' position-absolute ' style={{top: "130px"}} >
                        {data.map((e,i) => ( 
                            <div className=' d-flex justify-content-between ' key={i} onMouseEnter={() => sHold(i)} onMouseLeave={() => sHold(null)}>
                                <i  onClick={() => sNum(i)}
                                style={{cursor: "pointer", }}
                                className={`${i === num ? "fa-solid fa-circle-dot" : "fa-regular fa-circle-dot"} text-bg-danger`}></i>
                            </div>
                            
                        ))}
                    </div>
                    <img 
                        src={display.img} 
                        alt="img" 
                        className=' w-100 h-100 rounded rounded-5'
                    />
                    <div className=' d-flex justify-content-between align-items-center'>
                        <span className=' fs-2 fw-bold'>{display.name}</span>
                        <span className=' fs-3 fw-bold'>{display.room}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default PropertyList
