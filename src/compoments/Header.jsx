import React, { useEffect } from 'react'
import {useState} from 'react'
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';
import { useNavigate } from 'react-router-dom';

const Header = ({dis}) => {
    const [state1, sState1] = useState(dis)
    const [t1, sT1] = useState(false)
    const [t4, sT4] = useState(false)
    const kkk = dis

    const navigate = useNavigate()

    const [city, sCity] = useState("")


      function doClick() {
        navigate("../hotels", {
            state: {
                data: [city]
            }
        });
    }
    return (
        <div className=' bg-danger pt-5 pt-sm-3 pb-5 position-relative'>
            <div className='  container '>
                <button onClick={() => navigate('/')}
                className={` me-5 btn btn-close-white row ${state1 === true ? "rounded rounded-1, border-3 border-white" : ""}`} title='Stays' 
                onMouseEnter={() => sT1(true)}
                onMouseLeave={() => sT1(false)}>
                    <i className={`fa-solid fa-house ${t1 ? "fa-beat" : ""}`} style={{color: "#ffffff"}}></i>
                    <span className=' text-white d-none d-sm-block '>Stays</span>
                </button >
                <button  onClick={() => navigate('/hotels/')}
                className={` me-5 btn btn-close-white row ${state1 === false ? "rounded rounded-1, border-3 border-white" : ""}`} title='Attractions'
                onMouseEnter={() => sT4(true)}
                onMouseLeave={() => sT4(false)}>
                    <i className={`fa-solid fa-bed ${t4 ? "fa-beat" : ""}`} style={{color: "#ffffff"}}></i>
                    <span  className=' text-white d-none d-sm-block'>Place</span>
                </button >
            </div>
            {kkk && 
                    <div className=' mt-2 mt-sm-5 pb-3'>
                    <div className=' container d-flex flex-column justify-content-evenly'>
                        <span className=' fs-2 text-white fw-bold'>A lifetime of discounts? It's brilliant</span>
                        <span className=' text-white'>Get rewarded for your travels - join us to unlick instant saving up to 20%</span>
                        <div className=' pt-2 pb-2'>
                            <button className='btn btn-dark rounded rounded-0'>Log In/Register</button>
                        </div>
                </div>
                <div style={{height: "30px", bottom: "-15px"}} className=' w-100  w-75 position-absolute d-flex justify-content-center align-items-center '>
                    <div style={{borderRadius: "5px" , borderBlockStart: "5px solid black", borderInlineStart: "5px solid black",
                    borderBlockEnd: "5px solid gray" , borderInlineEnd: "5px solid gray"}} className=' w-75 d-flex justify-content-evenly align-items-center bg-white p-3  '>
                        <form className="form-floating w-50">
                            <input type="text" placeholder='Enter City Name'
                            className=' form-control border-0' value={city} onChange={(e) => sCity(e.target.value)}
                            />
                            <label className=' form-label'>
                                <i className="fa-solid fa-city"></i>
                                Enter City's Name
                            </label>
                        </form>
                        <div>
                            <button className='btn btn-success' onClick={() => doClick()}>Search</button>
                        </div>
                    </div>
                </div>
                </div>
            }
        </div>
        )
    }

export default Header
