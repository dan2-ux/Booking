import React, { useState } from 'react'
import Amsterdam from '../assets/cities pic for react js/amsterdam.jpg'
import London from '../assets/cities pic for react js/london.jpeg'
import Paris from '../assets/cities pic for react js/paris.jpg'
import { useNavigate } from 'react-router-dom'

const Feature = () => {
    const [am, sAm] = useState(0)
    const navigate = useNavigate()
    return (
        <div className=' pt-5 mt-5 container' style={{zIndex: 1}}>
            <div className=' row gap-lg-0 gap-3'>
                <div style={{cursor: "pointer", transform: am === 1 ? "scale(105%" : "", transition: "transform 0.5s"}} className=' col-lg-4 position-relative'  onClick={() => {
                        navigate("../hotels", {
                            state: {
                                data: ["Amsterdam"]
                            }
                        });
                    }} 
                    onMouseEnter={() => sAm(1)} onMouseLeave={() => sAm(0)}
                    >
                    <img src={Amsterdam} alt="" className=' w-100 h-100 rounded rounded-5'/>
                    <div className=' position-absolute d-flex flex-column ' style={{bottom : "20px", left: "50px"}}>
                        <span className=' fs-1 fw-bold text-white '>Amsterdam</span>
                        <span className='fs-4 text-white '>120 properties</span>
                    </div>
                </div>
                <div style={{cursor: "pointer", transform: am === 2 ? "scale(105%" : "", transition: "transform 0.5s"}} className=' col-lg-4 position-relative' onClick={() => {
                        navigate("../hotels", {
                            state: {
                                data: ["London"]
                            }
                        });
                    }}
                    onMouseEnter={() => sAm(2)} onMouseLeave={() => sAm(0)}>
                    <img src={London} alt="" className=' w-100 h-100 rounded rounded-5'/>
                    <div className=' position-absolute d-flex flex-column ' style={{bottom : "20px", left: "50px", backgroundColor: "transparent 5px 5px 5px"}}>
                        <span className=' fs-1 fw-bold text-white'>London</span>
                        <span className='fs-4 text-white'>130 properties</span>
                    </div>
                </div>
                <div style={{cursor: "pointer", transform: am === 3 ? "scale(105%" : "", transition: "transform 0.5s"}} className=' col-lg-4 position-relative'onClick={() => {
                        navigate("../hotels", {
                            state: {
                                data: ["Paris"]
                            }
                        });
                    }} onMouseEnter={() => sAm(3)} onMouseLeave={() => sAm(0)}>
                    <img src={Paris} alt="" className=' w-100 h-100 rounded rounded-5'/>
                    <div className=' position-absolute d-flex flex-column' style={{bottom : "20px", left: "50px", backgroundColor: "transparent 5px 5px 5px"}}>
                        <span className=' fs-1 fw-bold text-white'>Paris</span>
                        <span className='fs-4 text-white'>200 properties</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
