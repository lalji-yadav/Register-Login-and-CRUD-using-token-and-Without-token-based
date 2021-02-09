import axios from 'axios';
import React, { useEffect } from 'react';

const Readme = () => {

    useEffect(()=> {
        axios.get('http://localhost:3000/user/me').then((res)=> {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    })

    return (
        <div>
            
        </div>
    );
};

export default Readme;
