import React from 'react';
import { Table} from 'reactstrap';
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import Form from "reactstrap/es/Form";
import {Col, Row} from 'reactstrap';
import './MarksEntry.css'
import tu from "../../assests/tu logo official.png"

export class MarksEntry extends React.Component {
    render() {
        return(
               <div className="myCardStyle">
                    <Form className="myForm">

                        <Row>
                            <Col className="text-center">
                                <h4 className="text-white">IOE is Greater than TU</h4>
                                <img width="90vh" height="100vh" src={tu} alt="tulogo"/>
                            </Col>
                        </Row>
                    </Form>
                    
                    <Table className="myTable"  >
                        <thead>
                        <tr className="text-white">
                            <th>S.N</th>
                            <th>Roll No</th>
                            <th>Full Name</th>
                            <th>Full Marks</th>
                            <th>Pass Marks</th>
                            <th>Marks Obtained</th>
                            <th>Total</th>
                            <th>Remarks</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-white">
                            <td className="text-center">1</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">2</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">3</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">5</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input >Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">6</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">7</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">8</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">9</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td className="text-center">10</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter Marks</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        </tbody>
                        <tr>
                                <td colSpan="5" className="text-right">Action</td>
                        <td><Button outline className="text-white" color="success">Submit</Button></td>
                        </tr>

                    </Table>
               </div>
        );
    }
}