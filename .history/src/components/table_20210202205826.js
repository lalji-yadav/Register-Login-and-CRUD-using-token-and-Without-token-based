import React,{useState, useEffect} from 'react';
import { Table,TableHead,TableRow,TableCell,TableBody,Button } from "@material-ui/core";
import axios from "axios";


const Tables = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user').then((res) => {
             console.log(res)
            setData(res.data);
           // console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div style={{padding:'3%'}}>
             <Table aria-label="simple table">
                    <div className="scroll-tab">

                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }}
                             align="center">Name</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Email</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Password</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((item, row) => (
                            <TableRow key={row.id}>
                                <TableCell style={{ fontSize: "1.3vw" }} align='center'>
                                    {item.name}
                                </TableCell>

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">{item.email}
                                </TableCell>

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">{item.mobile}
                                </TableCell>

                                {/* <TableCell style={{ fontSize: "1.3vw" }} align="center">
                                    {item.completed ? "True" : "False"}
                                </TableCell> */}

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">
                                    <Button style={{ fontSize: "1vw" }} 
                                    variant="contained"
                                     color="secondary">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    </div>
                </Table>
        </div>
    );
};

export default Tables;
