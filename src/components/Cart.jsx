import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const [value, setvalue] = useState([]);
    useEffect(() => {
        const store = JSON.parse(localStorage.getItem('alldata')) || [];
        setvalue(store);
        console.log(value)
    }, []);

    const handleDelete = (id) => {
        const newData = value.filter(item => item.id !== id);
        setvalue(newData);
        localStorage.setItem('alldata', JSON.stringify(newData));
      }

    return (
        <>
            <div className=''>
                <div className='container' >
                    <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mt-2 mb-2 grid-cols-1 ' >
                        <h1 className='text-3xl font-bold mb-4 mt-4'>Shopping Cards </h1>
                        <hr />
                    </div>
                </div>
                <ul>
                    {value.map((item, index) => (
                        <div className="container bg-white mx-auto mt-8" key={index}>

                            <div className="grid grid-cols-12 gap-4 shadow-md p-8">
                                <div className=" col-span-12 lg:col-span-4 md:col-span-4 sm:col-span-12">
                                    <img src={item.url} alt="" className='h-72 w-full rounded' />
                                </div>
                                <div className="col-span-12 lg:col-span-8 md:col-span-8 sm:col-span-12 p-4">
                                    <h2 className='font-bold text-2xl mt-2'>{item.name}</h2>
                                    <p className='text-xl  mt-2'>{item.desc}</p>
                                    <p className='text-xl font-bold  mt-2'>Price: &#8377; {item.price}</p>
                                    <div>
                                        <label>Qty : {` `}</label>
                                        <QuantityDropdown item={item} />
                                    </div>
                                    <p className='text-xl  mt-2 text-green-400'>offer now &#8377; {item.discount}% off</p>
                                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 mt-2' >
                                        <div className='p-2' >
                                            <button className='bg-orange-500 p-2 rounded w-full  text-xl ' onClick={() => handleDelete(item.id)} >Delete card</button>
                                        </div>
                                        <div className='p-2' >
                                            <button className='bg-green-500 p-2 rounded w-full  text-xl ' onClick={() => navigate('/')} >Bye now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </ul>
                <div className='p-2 text-center' >
                    <button className='hover:text-blue-500 mt-2 p-4   text-xl ' onClick={() => navigate('/')} >Back To Home</button>
                </div>
            </div>

        </>
    );
};

const QuantityDropdown = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const [isCustomQuantity, setIsCustomQuantity] = useState(false);

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value === 'custom') {
            setIsCustomQuantity(true);
        } else {
            setQuantity(value);
        }
    };

    const handleCustomQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <>
            {isCustomQuantity ? (
                <input
                    type="number"
                    value={quantity}
                    onChange={handleCustomQuantityChange}
                    min="6"
                    placeholder="Enter quantity"
                    className=' mx-2 ps-3 '
                    style={{
                        width: '70px',
                        marginRight: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                />
            ) : (
                <select value={quantity} className='mx-4  p-2 w-14' onChange={handleQuantityChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="custom">Enter Your Qty +5</option>
                </select>
                
            )}
        </>
    );
};

export default Cart;