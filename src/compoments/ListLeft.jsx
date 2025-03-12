import React, { useEffect } from 'react'
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import { useState } from 'react';
import Data from './Data'

const ListRight = ({onSend, kkk}) => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    console.log(onSend)
    const [openDate , setOpenDate] = useState(false)
    const [city , sCity ] = useState(onSend[0].length < Data.length ? onSend[0][0].city : "")
    const [time , sTime] = useState(0 ) 
    const [min , sMin ] = useState(0)
    const [max, sMax] = useState(0)
    const [room, sRoom] = useState(1)
    const [adult , sAdult] = useState(1)
    const [child, sChild] = useState(0)

    function doFunction(){
        if(city !== ""){
            const cityName = Data.filter(Data => Data.city === city.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") )
            if(min !== 0 && max !== 0){
                const Price = cityName.filter(Data => Data.price >= min && Data.price <= max)
                return kkk( Price )
            }
            else if(min !== 0 ){
                const minPrice = cityName.filter(Data => Data.price >= min)
                return kkk(minPrice)
            }
            else if(max !== 0){
                const maxPrice = cityName.filter(Data => Data.price >= max)
                return kkk(maxPrice)
            }
            kkk([cityName,time, adult, child, room] )
        }        
    }
    useEffect(() => {
        if (state[0]?.startDate && state[0]?.endDate) {
            const diffTime = (new Date(state[0].endDate).getTime() - new Date(state[0].startDate).getTime()) 
                            / (1000 * 60 * 60 * 24); 
            sTime(diffTime);
        }
    }, [state]);
    return (
        <div style={{ position: "sticky", top: "0", height: "100vh", overflowY: "auto" }}>
            <div className=' container position-relative'>
                <div className=''>
                    <div className=' d-lg-flex flex-column d-flex '>
                        <span className=' fs-3 fw-bold '>Search</span>
                        <div>
                            <label htmlFor="des" className=' user-select-none'>Destination</label>
                            <input value={city} onChange={(e) => sCity(e.target.value)} type="text" id='des' className=' form-control'/>
                        </div>
                        <div >
                            <label className=' user-select-none' onClick={() => {
                                        setOpenDate(!openDate)
                                    }}>Destination</label>
                                <div onClick={() => {
                                        setOpenDate(!openDate)
                                }} className=' d-flex  justify-content-center align-items-center'>
                                    <input readOnly style={{cursor: "pointer", userSelect: "none"}} 
                                    className=' form-control text-center ' type="text" 
                                    value={`${format(state[0].startDate, "dd/MM/yy")} to ${format(state[0].endDate, "dd/MM/yy")}`}/>
                                </div>
                                {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setState([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={state} className=' position-absolute z-2' 
                                />}
                        </div>
                    </div>
                    <div>
                        <span className=' fs-5 fw-bold '>Options</span>
                        <table>
                            <tbody>
                                <tr>
                                    <td className=' w-75'> 
                                        <label htmlFor="min" className=' user-select-none'>Min Price Per Night</label>
                                    </td>
                                    <td>
                                        <input value={min} onChange={(e) => sMin(e.target.value)} min={99} max={400}  type="number" id='min' className=' form-control'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' w-75'> 
                                        <label htmlFor="max" className=' user-select-none'>Max Price Per Night</label>
                                    </td>
                                    <td>
                                        <input value={max} onChange={(e) => sMax(e.target.value)}  min={99} max={400}  type="number" id='max' className=' form-control'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' w-75'> 
                                        <label htmlFor="adult"  className=' user-select-none'>Num of Adult</label>
                                    </td>
                                    <td>
                                        <input type="number" value={adult} onChange={(e) => sAdult(e.target.value)} id='adult' min={1} defaultValue={1} className=' form-control'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' w-75'> 
                                        <label htmlFor="Children" className=' user-select-none'>Num of Children</label>
                                    </td>
                                    <td>
                                        <input type="number" value={child} onChange={(e) => sChild(e.target.value)} id='Children' min={1} className=' form-control'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' w-75'> 
                                        <label htmlFor="room" className=' user-select-none'>Num of Room</label>
                                    </td>
                                    <td>
                                        <input type="number" value={room} onChange={(e) => sRoom(e.target.value)} id='room' defaultValue={1} min={1} className=' form-control'/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=' row mt-4'>
                        <button onClick={() => doFunction()} className=' rounded rounded-2 col-12 btn btn-success'>Search</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ListRight