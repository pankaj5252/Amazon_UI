import React from 'react'
import img1 from '../../../src/assets/Bgslider/amg-1.jpg';
import img2 from '../../../src/assets/Bgslider/amg-3.jpg';

function HomeCard() {
    return (
        <>

<div className="container-fluid"  style={{ position:'relative', top:'-60px'}} >

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-4 sm:grid-cols-1 gap-4 ">
                <div className='bg-white shadow-md'>
                    <h1 className='p-3 text-2xl font-bold'>Name of the offer</h1>
                    <div className="container" >
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Lcd</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                            </div>
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>furniture</h1>
                            </div>
                           
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-center text-blue-400 p-4'>See more</button>
                    </div>
                </div>

                <div className='bg-white shadow-md'>
                    <h1 className='p-3 text-2xl font-bold'>Name of the offer</h1>
                    <div className="container">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Lcd</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                            </div>
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>furniture</h1>
                            </div>
                           
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-center text-blue-400 p-4'>See more</button>
                    </div>
                </div>

                <div className='bg-white shadow-md'>
                    <h1 className='p-3 text-2xl font-bold'>Name of the offer</h1>
                    <div className="container">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Lcd</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                            </div>
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>furniture</h1>
                            </div>
                           
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-center text-blue-400 p-4'>See more</button>
                    </div>
                </div>

                <div className='bg-white shadow-md'>
                    <h1 className='p-3 text-2xl font-bold'>Name of the offer</h1>
                    <div className="container">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Lcd</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>refrigarator</h1>
                            </div>
                            <div>
                                <img src={img1} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>Air Cooler</h1>
                            </div>
                            <div>
                                <img src={img2} alt="" className='h-28 w-100' />
                                <h1 className='text-gray-400 mt-2'>furniture</h1>
                            </div>
                           
                        </div>
                    </div>
                    <div className=''>
                        <button className='text-center text-blue-400 p-4'>See more</button>
                    </div>
                </div>


            </div>
        </div>

        </>
    )
}

export default HomeCard
