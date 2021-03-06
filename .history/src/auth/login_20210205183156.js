import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";

const validate = values => {
    const errors = {};
  
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be 20 characters or less';
    }
  
    return errors;
  };

const Login = () => {

    // const [values, setValues] = useState({
    //     email:'',
    //     password: ''
    // })

    // const changeHandler = (event) => {
    //     setValues((prevProps) => ({
    //       ...prevProps,
    //       [event.target.name]: event.target.value
    //     }));
    //   };

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //   };

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          login: false,
          token: null
        },
        validate
      });  

    const onLogin=()=> {
       // event.preventDefault();
        // console.log(values);
        // alert(`${values.email}`)
        axios.post('http://localhost:3000/user/login',
         {email:formik.values.email, password:formik.values.password})
         .then((res)=> {
          console.log(res.data.token)
          const ab= localStorage.getItem('login',JSON.stringify({login:true, token:res.data.token}))
           console.log(ab)
            alert("Login successfully")
        }).catch((err)=> {
            console.log(err)
        }) 
    }

    return (
        <div style={{padding:"10%"}}>
            <h1> Login Form </h1>
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email"
                     placeholder="Enter email"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.email}
                      />
                </Form.Group>
                <p style={{color:"red"}}>
                {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
                 ) : null}
                </p>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"
                     value={formik.values.password}
                     placeholder="Password"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     autoComplete="on"
                      />
                </Form.Group>
                <p style={{color:"red"}}>
                {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
                 ) : null}
                </p>
                </Form>

            <Button type="button" onClick={onLogin} className="btn btn-primary">Login</Button> <br /> <br />
            <Button type="button" variant="light"> <Link to="/">Go to Register </Link> </Button>
        </div>
    );
};

export default Login;
