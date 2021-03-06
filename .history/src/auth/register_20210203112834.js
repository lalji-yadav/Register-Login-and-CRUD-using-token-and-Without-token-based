import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Register = () => {

    const [values, setValues] = useState({
        name:'',
        mobile:'',
        email:'',
        password:''
    })

    const changeHandler = (event) => {
        setValues((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };
    
    const onRegister=()=> {
       axios.post('http://localhost:3000/user',
       {name:values.name, mobile:values.mobile, email:values.email, password:values.password})
       .then((res)=> {
           console.log(res)
       }).catch((err)=> {
           console.log(err)
       })
    }  

    return (
        <div style={{padding:"10%"}}>
           <h1> Register Form </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                    name="name"
                    value={values.name}
                    onChange={changeHandler}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile"
                     name="mobile"
                     value={values.mobile}
                    onChange={changeHandler}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                     />
                </Form.Group>
               
               
            </Form>

            <Button type="button" className="btn btn-primary" onClick={onRegister} > 
            Register </Button> <br /> <br />
            <Button type="button"> <Link to="/login"> Go to Login </Link> </Button>  
        </div>
    );
};

export default Register;
