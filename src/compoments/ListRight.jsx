import React, { createContext, useEffect, useState } from 'react'
import Data from './Data'
import { useNavigate } from 'react-router-dom'

const ListRight = ({data}) => {
    const navigate = useNavigate()
    const [click, sClick] = useState()
    return (
        <div className=' container p-0 m-0' style={{zIndex: 1}}>
            <div className=' row  gap-4 z-1 p-0 m-0'>
                {data[0].map((e,i) => (
                    <div style={{cursor: "pointer", userSelect: "none"}} 
                    className=' p-0 m-0 col-12 row border border-1 border-danger p-3 rounded rounded-3' key={i}>
                        <div className=' col-9 col-md-4 '>
                            <img src={e.img[0]} alt={e.name} 
                            className=' h-100 w-100' />
                        </div>
                        <div className=' col-6 d-none d-md-flex flex-column p-0 m-0'>
                            <span className=' fw-bold fs-3'>{e.name}</span>
                            <div>
                                <span className=' pe-2'>
                                    <a style={{textDecoration: "none"}} target='blank' href={`https://en.wikipedia.org/wiki/${e.city}`}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        {e.city}
                                    </a>
                                </span>
                                <span>${e.price} per night</span>
                            </div>
                            
                            <span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam magni esse illum aliquid aliquam cumque in dignissimos labore error pariatur maiores dolore, assumenda ea rerum repellendus temporibus? Eligendi, voluptatum nobis.
                            </span>
                        </div>
                        <div className=' col-3 col-lg-2 d-flex flex-column justify-content-start align-items-center'>
                            <span className=' fw-bold'>{e.rating > 8 ? e.rating < 9 ? "Very Good" : "Excelent" : "Good"} </span>
                            <span className=' p-3 bg-danger rounded rounded-3 text-white fw-bold'>{e.rating}</span>
                                <button className=' btn btn-primary mt-5' onClick={() => {
                                    sClick(i)
                                    navigate(`../hotel/${i}`)
                                }}>Book</button>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListRight
