import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
import {Link} from "react-router-dom";
import { useFormik } from "formik";

const Register = () => {

    // const [values, setValues] = useState({
    //     name:'',
    //     mobile:'',
    //     email:'',
    //     password:''
    // })

    // const changeHandler = (event) => {
    //     setValues((prevProps) => ({
    //       ...prevProps,
    //       [event.target.name]: event.target.value
    //     }));
    //   };
   const formik = useFormik({
       initialValues:{
        name:'',
        mobile:'',
        email:'',
        password:''  
       }
   })
    
    const onRegister=()=> {
       axios.post('http://localhost:3000/user',
       {name:values.name, mobile:values.mobile, email:values.email, password:values.password})
       .then((res)=> {
           console.log(res)
           alert("Register successfully")
       }).catch((err)=> {
           console.log(err)
       })
    }  

    return (
        <div style={{padding:"10%"}}>
           <h1> Register Form </h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile"
                     name="mobile"
                     value={formik.values.mobile}
                    onChange={formik.handleChange}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    autoComplete="on"
                     />
                </Form.Group>
               
               
            </Form>

            <Button type="button" className="btn btn-primary" onClick={onRegister} > 
            Register </Button> <br /> <br />
            <Button type="button" variant="light"> <Link to="/login"> Go to Login </Link> </Button>  
        </div>
    );
};

export default Register;
