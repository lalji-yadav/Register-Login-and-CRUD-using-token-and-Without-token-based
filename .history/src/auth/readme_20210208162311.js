import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Readme = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {

        const token = localStorage.getItem('token')
        console.log(token)
        axios.get('http://localhost:3000/user/me',
        { headers: {"Authorization" : `Bearer ${token}`} }
        ).then((res)=> {
            
            setData(res.data)
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    },[])

    return (
        <div>
            <h3> Token base Routing in React data </h3>

            <> 
              <h1>{data.name}</h1>
              <h1>{data.mobile}</h1>
              <h1>{data.email}</h1>
            </>            
        </div>
    );
};

export default Readme;
