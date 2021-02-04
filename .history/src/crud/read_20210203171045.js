import React,{useState, useEffect} from 'react';
import { Table,TableHead,TableRow,TableCell,TableBody,Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";


const Read = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       onGet()
    }, []);

    const onGet=()=> {
        axios.get('http://localhost:3000/user').then((res) => {
            console.log(res)
           setData(res.data);
          // console.log(res.data);
       }).catch((error) => {
           console.log(error);
       });
    }

    const onDelete=(_id)=> {
        axios.delete(`http://localhost:3000/user/${_id}`,{
            method:'Delete'
        }).then((res)=> {
            console.log(res)
            alert('Delete successfully')
            onGet()
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div style={{padding:'3%'}}>
             <Table aria-label="simple table">
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
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Update</TableCell>
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

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">
                                    <Button style={{ fontSize: "1vw" }} 
                                    variant="contained"
                                     color="secondary" onClick={()=>onDelete(item._id)}>Delete</Button>
                                </TableCell>

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">
                                    <Button style={{ fontSize: "1vw" }} 
                                      variant="contained"
                                       color="primary">
                                         <Link to={"/user/"+ item._id}> Update </Link>
                                        </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </div>
    );
};

export default Read;
