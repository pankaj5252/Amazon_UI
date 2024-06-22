import React from 'react'
import img1 from '../../../src/assets/Bgslider/amg-1.jpg';
import img2 from '../../../src/assets/Bgslider/amg-3.jpg';
import img3 from '../../assets/slider/watch.webp';
import img4 from '../../assets/slider/fan.webp';
import img5 from '../../assets/slider/sand-maker.webp';
import img6 from '../../assets/slider/headphone.webp';
import img7 from '../../assets/slider/air-bud.webp';
import { useNavigate } from 'react-router-dom';

function HomeCard() {
    const navigate = useNavigate();

    return (
        <>

<div className="container-fluid"  style={{ position:'relative', top:'-60px'}} >

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-4 sm:grid-cols-1 gap-4 ">
                <div className='bg-white shadow-md'>
                    <h1 className='p-3 text-2xl font-bold'>Up to 50% off | International brands</h1>
                    <div className="container" >
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Lcd</h1>
                            </div>
                            <div>
                                <img src={img6} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                            </div>
                            <div>
                                <img src={img3} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>furniture</h1>
                            </div>
                           
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-center text-blue-400 p-4' onClick={()=>{navigate('/multidetails'),window.scrollTo(0, 0);}} >See more</button>
                    </div>
                </div>

                <div className='bg-white shadow-md'>
                    <h1 className='p-3 text-2xl font-bold'>Customers’ Most-Loved Fashion for you</h1>
                    <div className="container">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Lcd</h1>
                            </div>
                            <div>
                                <img src={img5} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                            </div>
                            <div>
                                <img src={img3} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>furniture</h1>
                            </div>
                           
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-center text-blue-400 p-4' onClick={()=>{navigate('/multidetails'),window.scrollTo(0, 0);}} >See more</button>
                    </div>
                </div>

                <div className='bg-white shadow-md'>
                    <h1 className='p-3 text-2xl font-bold'>Appliances for your home | Up to 55% off</h1>
                    <div className="container">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Lcd</h1>
                            </div>
                            <div>
                                <img src={img7} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                            </div>
                            <div>
                                <img src={img6} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>furniture</h1>
                            </div>
                           
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-center text-blue-400 p-4' onClick={()=>{navigate('/multidetails'),window.scrollTo(0, 0);}} >See more</button>
                    </div>
                </div>

                <div className='bg-white shadow-md'>
                    <h1 className='p-3 text-2xl font-bold'>Automotive essentials | Up to 60% off</h1>
                    <div className="container">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <img src={img4} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Lcd</h1>
                            </div>
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                            </div>
                            <div>
                                <img src={img6} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>furniture</h1>
                            </div>
                           
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-center text-blue-400 p-4' onClick={()=>{navigate('/multidetails'),window.scrollTo(0, 0);}} >See more</button>
                    </div>
                </div>


            </div>
        </div>

        </>
    )
}

export default HomeCard
