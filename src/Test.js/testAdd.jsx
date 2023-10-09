import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
import Combat from './testrun2'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'

export default function CreateCart() {

  const [name, setName] = useState('');
  const [type, setType] = useState('');

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name;
    let b = type;

    Combat.push({id: uniqueId, Name : a, Type : b});

    history('/test-cart');
  }
    
  return (
    <div>
      <Form className="d-grid gap-2" style={{margin:"5rem"}}>

        <Form.Group className='mb-3' controlId='formName'>
            <Form.Control 
              type="text" placeholder='Enter Name' 
              required onChange={(e) => {setName(e.target.value)}}>
            </Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formType'>
            <Form.Control 
              type="text" placeholder='Enter Type' 
              required onChange={(e) => {setType(e.target.value)}}>
            </Form.Control>
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
      </Form>
    </div>
  )
}
