import axios from 'axios';
import React, { useEffect } from 'react';

const Readme = () => {

    useEffect(()=> {
        axios.get('').then((res)=> {
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
