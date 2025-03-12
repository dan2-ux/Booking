import React from 'react'

const Footer = () => {
    return (
        <div style={{ height: "15rem" }} className="container d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-start flex-wrap gap-5">
                <div className="d-flex flex-column align-items-start me-5">
                    <a style={{ textDecoration: "none" }} href="">Countries</a>
                    <a style={{ textDecoration: "none" }} href="">Regions</a>
                    <a style={{ textDecoration: "none" }} href="">Cities</a>
                    <a style={{ textDecoration: "none" }} href="">Districts</a>
                    <a style={{ textDecoration: "none" }} href="">Airports</a>
                    <a style={{ textDecoration: "none" }} href="">Hotels</a>
                </div>
                <div className="d-flex flex-column align-items-start">
                    <a style={{ textDecoration: "none" }} href="">Gmail: danh25911@gmail.com</a>
                    <a style={{ textDecoration: "none" }} href="">Phone: 0703578159</a>
                </div>
            </div>
        </div>

    )
}

export default Footer
