import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";

const validate = values => {
    const errors = {};
  
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

const Login = () => {

    const [values, setValues] = useState({
        email:'',
        password: ''
    })

    const changeHandler = (event) => {
        setValues((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };

    const onLogin=()=> {
       // event.preventDefault();
        // console.log(values);
        // alert(`${values.email}`)
        axios.post('http://localhost:3000/user/login',
         {email:values.email, password:values.password})
         .then((res)=> {
            console.log(res)
            alert("Login successfully")
        }).catch((err)=> {
            console.log(err)
        }) 
    }

    const formik = useFormik({
        initialValues: {
          name: '',
          password: ''
        },
        validate
      });

    return (
        <div style={{padding:"10%"}}>
            <h1> Login Form </h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email"
                     value={formik.values.email}
                     placeholder="Enter email"
                     onChange={formik.changeHandler}
                     onBlur={formik.handleBlur}
                      />
                </Form.Group>

                {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
                 ) : null}

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={values.password}
                     placeholder="Password"
                     onChange={changeHandler}
                     autoComplete="on"
                      />
                </Form.Group>
                </Form>

            <Button type="button" onClick={onLogin} className="btn btn-primary">Login</Button> <br /> <br />
            <Button type="button" variant="light"> <Link to="/">Go to Register </Link> </Button>
        </div>
    );
};

export default Login;
