import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
import Combat from "./testrun2";
// import { useSelector } from "react-redux";
import { Link, useNavigate} from 'react-router-dom'

function Home() {
    
    let history = useNavigate();

    const handleEdit = (id, name, type) => {
        localStorage.setItem('Name', name)
        localStorage.setItem('Type', type)
        localStorage.setItem('Id', id)
    }

    const handleDelete = (id) => {
        var index = Combat.map(function(e){
            return e.id 
        }).indexOf(id);

        Combat.splice(index, 1);

        history('/test-cart');

        
    }

    return (
        <>
        <Fragment>
            <div className="crud" style = {{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Action
                            </th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Combat && Combat.length > 0 
                            ?
                            Combat.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Type}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button className="edit" onClick={() => handleEdit(item.id, item.Name, item.Type)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button className="delete" onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className ='d-grid gap-2' to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
        </>
    )
}

export default Home;