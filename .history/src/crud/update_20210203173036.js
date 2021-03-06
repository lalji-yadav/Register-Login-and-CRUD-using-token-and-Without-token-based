import React,{useState, useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
//import {Link} from "react-router-dom";
  

const Update = (props) => {

    const [values, setValues] = useState({
        name:'',
        mobile:'',
        email:'',
        // _id:null
    })

    const changeHandler = (event) => {
        setValues((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };
     
    useEffect(()=>{
        onGet()
        // console.warn(props) 
        // console.warn(props.match.params.id) 
    },[])

    const onGet=()=>{
        axios.get('http://localhost:3000/user/'+ props.match.params.id).then((res)=> {
            console.log(res)
            setValues(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }

    const onUpdate=()=> {
        axios.patch('http://localhost:3000/user/'+ props.match.params.id,
        {name:values.name, mobile:values.mobile, email:values.email})
        .then((res)=> {
            console.log(res)
            alert("Update successfully")
        }).catch((err)=> {
            console.log(err)
        })
     }  
      
    //  console.log(values._id)
    //  console.log(props.match.params.id)
    return (
        <div style={{padding:"10%"}}>
           <h1> Update Table Without Token </h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                    name="name"
                    value={values.name}
                    onChange={changeHandler}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile"
                     name="mobile"
                     value={values.mobile}
                    onChange={changeHandler}
                     />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                     />
                </Form.Group>
               
               
            </Form>

            <Button type="button" className="btn btn-primary" onClick={onUpdate} > 
            Update Table </Button> <br /> <br />
           
        </div>
    );
};

export default Update;
