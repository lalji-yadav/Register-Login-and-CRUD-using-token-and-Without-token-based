import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Readme = () => {

    const [values, setValues] = useState([])

    useEffect(()=> {

        const token = localStorage.getItem('token')
        console.log(token)
        axios.get('http://localhost:3000/user/me',
        { headers: {"Authorization" : `Bearer ${token}`} }
        ).then((res)=> {
            
            setValues(res.values)
            console.log(res.values)
        }).catch((err)=> {
            console.log(err)
        })
    })

    return (
        <div>
            <h3> Token base Routing in React data </h3>
            {/* <p>{res.data.name}</p> */}
            
        </div>
    );
};

export default Readme;
