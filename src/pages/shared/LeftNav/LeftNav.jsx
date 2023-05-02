import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {

    const [catagories,setCatagories] = useState([]);
    useEffect (()=>{
        fetch('https://the-news-dragon-server-chowdhuryjoyanti.vercel.app/catagories')
        .then(res => res.json())
        .then(data => setCatagories(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
        <h4>All Catagory</h4>
            <div className='ps-4'>
            {
            catagories.map(catagory => <p
                key={catagory.id}
            
            
            >
                <Link  to ={`/catagory/${catagory.id}`}
                className='text-black text-decoration-none'>{catagory.name}</Link>
            </p>)
        }
            </div>
        </div>
    );
};

export default LeftNav;