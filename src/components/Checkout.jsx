import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import './styles/checkout.css'
import { Container, Row, Col, Card, Form, Table, Button } from "react-bootstrap";
import React from 'react'
// import { useHistory } from "react-router-dom";


export default function Checkout() {
  
  // const history = useHistory();

  useEffect(() => {
    let isMounted = true;

    axios.get('https://fakestoreapi.com/carts').then(res=>{
      if(isMounted)
      {
        if(res.data.status === 200)
        {
          setCart(res.data.cart);
          setLoading(false);
        }
        else if(res.data.status === 401) {
          history.push('/');
          // swal("Warning", res.data.message, "error")
        }
      }
    });

    return () => {
      isMounted = false;
    }
  })

  return (
    <Form>
      <div className="py-3 bg-warning">
        <Container className="container">
          <h6>Home / Checkout</h6>
        </Container>
      </div>

      <div className="py-4">
        <Container className="container">
          <Row className="row">

            <Col md={7} className="col-md-7">
              <Card className="checkout-page">
                <Card.Header className="card-header">
                  <header className='checkout-title'>Checkout Form</header>
                </Card.Header>
                <Card.Body className="card-body">
                  
                  <Row className="card-row">

                    <Col md={6} className="col-md-6">
                      <Form.Group mb={3} className="form-group mb-3">
                          <Form.Label >First Name</Form.Label>
                          <Form.Control type="text" name="firstname" className="form-control"/>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="col-md-6">
                      <Form.Group mb={3} className="form-group mb-3">
                          <Form.Label >Last Name</Form.Label>
                          <Form.Control type="text" name="lastname" className="form-control"/>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="col-md-6">
                      <Form.Group mb={3} className="form-group mb-3">
                          <Form.Label >Phone Number</Form.Label>
                          <Form.Control type="text" name="phone" className="form-control"/>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="col-md-6">
                      <Form.Group mb={3} className="form-group mb-3">
                          <Form.Label >Email Address</Form.Label>
                          <Form.Control type="text" name="email" className="form-control"/>
                      </Form.Group>
                    </Col>

                    <Col md={6} className="col-md-6">
                      <Form.Group mb={3} className="form-group mb-3">
                          <Form.Label >Address</Form.Label>
                          <Form.Control type="text" name="address" className="form-control"></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col md={4} className="col-md-4">
                      <Form.Group mb={3} className="form-group mb-3">
                          <Form.Label >City</Form.Label>
                          <Form.Control type="text" name="city" className="form-control"/>
                      </Form.Group>
                    </Col>

                    <Col md={4} className="col-md-4">
                      <Form.Group mb={3} className="form-group mb-3">
                          <Form.Label >State</Form.Label>
                          <Form.Control type="text" name="state" className="form-control"/>
                      </Form.Group>
                    </Col>

                    <Col md={4} className="col-md-4">
                      <Form.Group mb={3} className="form-group mb-3">
                          <Form.Label >Zipcode</Form.Label>
                          <Form.Control type="text" name="zipcode" className="form-control"/>
                      </Form.Group>
                    </Col>

                    <Col md={12} className="col-md-12">
                      <div className="form-group text-end">
                          <Button type="Button" className="btn btn-primary">Place Order</Button>
                      </div>
                    </Col>

                  </Row>

                </Card.Body>
              </Card>
            </Col>

            <Col md={5} className="col-md-5">
                <Table striped bordered className="table table-bordered">
                    <thead>
                        <tr>
                            <th width="50%">Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
          
          </Row>
        </Container>
      </div>
    </Form>
  )
}

