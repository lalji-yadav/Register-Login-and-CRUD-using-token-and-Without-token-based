import React,{useState, useEffect} from 'react';
import { Table,TableHead,TableRow,TableCell,TableBody,Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";


const Tabledata = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       onGet()
    }, []);

    const onGet=()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log(res)
           setData(res.data);
          // console.log(res.data);
       }).catch((error) => {
           console.log(error);
       });
    }

    return (
        <div style={{padding:'3%'}}>
            <h2> CRUD Operation without Token </h2>
             <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }}
                             align="center">ID</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Title</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Body</TableCell>
                           
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell style={{ fontSize: "1.3vw" }} align='center'>
                                    {item.name}
                                </TableCell>

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">{item.email}
                                </TableCell>

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">{item.mobile}
                                </TableCell>

                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </div>
    );
};

export default Tabledata;
