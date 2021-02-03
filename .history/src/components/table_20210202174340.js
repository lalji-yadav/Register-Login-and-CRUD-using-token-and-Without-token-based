import React,{useState, useEffect} from 'react';
import axios from "axios";


const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res) => {
             console.log(res)
            setData(res.data);
           // console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default Table;
