import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
import Combat from './testrun2'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'

function EditCart () {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Combat.map(function(e){
        return e.id 
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
    
       let a = Combat[index];
       a.Name = name;
       a.Type = type;
    
        history('/test-cart');
      }

      useEffect(() => {
        setName(localStorage.getItem('Name'));
        setType(localStorage.getItem('Type'));
        setId(localStorage.getItem('Id'));
      }, [])

    return (
        <div>
            <Form className="d-grid gap-2" style={{margin:"5rem"}}>

                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control 
                    type="text"  value={name} placeholder='Enter Name' 
                    required onChange={(e) => {setName(e.target.value)}}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formType'>
                    <Form.Control 
                    type="text" value={type} placeholder='Enter Type' 
                    required onChange={(e) => {setType(e.target.value)}}>
                    </Form.Control>
                </Form.Group>

                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default EditCart