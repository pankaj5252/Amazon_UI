// Cart.jsx
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

    return (
        <>
            <div>
                <h1>Cart</h1>
                {/* <p>Cart Count: {value.length}</p> */}
                <ul>
                    {value.map((item, index) => (
                        <li key={index}>
                            <img src={item.url} alt="" className='h-24 w-24' />
                            <h2>{item.name}</h2>
                            <p>Price: &#8377; {item.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
        </>
    );
};

export default Cart;