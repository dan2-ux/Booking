import React, { useEffect, useState } from 'react'
import Data from '../compoments/Data'
import { useNavigate } from 'react-router-dom'

const FeaturedProperties = () => {
    const LondonBestRating = Data.filter(Data => Data.city === "London").reduce((max, item) => item.rating > max.rating ? item : max)
    const ParisBestRating = Data.filter(Data => Data.city === "Paris").reduce((max, item) => item.rating > max.rating ? item : max)
    const NYBestRating = Data.filter(Data => Data.city === "New York City").reduce((max, item) => item.rating > max.rating ? item : max)
    const AmsterBestRating = Data.filter(Data => Data.city === "Amsterdam").reduce((max, item) => item.rating > max.rating ? item : max)
    const data = [LondonBestRating , ParisBestRating , NYBestRating, AmsterBestRating]
    const navigate = useNavigate()
    function doClick(e,i){
        const kkk = Data.findIndex(Data => Data === e)
        navigate(`../hotel/${kkk}`)
    }
    const [hold , sHold] = useState(null)
    return (
        <div className=' container mb-5'>
            <div className='row ' >
                {data.map((e,i) => (
                    <div onMouseEnter={() => sHold(i)} onMouseLeave={() => sHold(null)}
                    style={{cursor: "pointer"}} className=' col-3 d-flex flex-column gap-2' key={i} onClick={() => doClick(e,i)}>
                        <img src={e.img[0]} alt={e.name} 
                        className=' w-100 h-100 rounded rounded-5'/>
                        <span className={`fw-bold fs-4 `} style={{textDecoration: hold ===  i ? "underline" : ""}}>{e.name}</span>
                        <span>{e.city}</span>
                        <span className=' fw-bold'>{e.price} a night</span>
                        <div className=' '>
                            <span 
                            className=' bg-danger rounded rounded-2 p-1 text-white me-2'>
                                {e.rating}
                            </span>
                            <span className=' fw-bolder fst-italic'>Excellent</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProperties
