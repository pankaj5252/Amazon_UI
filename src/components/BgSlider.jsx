import React from 'react';
import img1 from '../../src/assets/Bgslider/amg-1.jpg';
import img2 from '../../src/assets/Bgslider/amg-2.jpg';
import img3 from '../../src/assets/Bgslider/amd-4.jpg';
const BgSlider = () => {


    return (
        <>
            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block h-96 w-screen" alt="..."   />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white opacity-100"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block  h-96 w-screen" alt="..."   />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white opacity-100"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block h-96 w-screen" alt="..."   />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white opacity-100"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
};

export default BgSlider;