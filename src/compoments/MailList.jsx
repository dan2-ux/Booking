import React from 'react'

const mailList = () => {
  return (
    <div className="bg-danger w-100 h-100 mt-5 p-5">
        <div style={{height: "15rem"}} className="container d-flex flex-column justify-content-evenly align-items-center">
            <span className="fs-1 fw-bold text-white">Save time + money</span>
            <span className="text-white">Sign up and we'll send the best deals to you</span>
            <div className=' w-100 d-flex justify-content-center align-items-center'>
                <div className="w-75 row gap-1 gap-xxl-3 d-flex justify-content-center align-items-stretch">
                    <form className="form-floating col-lg-9 col-8 ">
                        <input type="text" className="form-control ps-5" placeholder="Enter email" />
                        <label className="form-label ps-4">Enter Email</label>
                    </form>
                    <div className="col-lg-2 col-3  d-flex align-items-stretch">
                        <button className="btn btn-primary w-100 h-100 fw-bolder">Sign In</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

  )
}

export default mailList
