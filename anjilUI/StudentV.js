import React from 'react';
import { Card, CardTitle, Table, Button, ButtonGroup } from 'reactstrap';
import {Container} from "react-bootstrap";


export class StudentV extends React.Component {
    render() {
        return (
            <Container style={{  marginLeft:'150px',  marginTop:'-60px', width:'1300px'}}>
                <Card body inverse style={{ backgroundColor: '#272a3d', borderColor: '#272a3d',boxShadow:'2px 2px 10px 0.01px #121212'}}>

                    <CardTitle className="text-center">Tribhuwan University</CardTitle>
                    <CardTitle className="text-center">IOE, Pulchowk Campus, Lalitpur</CardTitle>
                    <Table borderless>
                        <tr className="col-6">
                            <td className="text-white">Name: Anjil Bishowkarma</td>
                            <td className="text-white">Roll No: PUL074BCT005</td>
                        </tr>
                        <tr className="col">

                            <ButtonGroup>
                                <td className="text-white">Year:</td>
                                <Button>I</Button>
                                <Button>II</Button>
                                <Button>III</Button>
                                <Button>IV</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <td className="text-white">Part</td>
                                <Button>I</Button>
                                <Button>II</Button>
                                <Button>III</Button>
                                <Button>IV</Button>
                            </ButtonGroup>
                        </tr>
                        <tr className="col-6">
                            <td className="text-white">Programme: Bachelor's Degree in Computer Engineering</td>
                            <td className="text-white" >TU Reg. No: </td>
                        </tr>
                    </Table>
                </Card>
                <br/>
                <Card style={{padding:'10px',backgroundColor: '#272a3d', borderColor: '#272a3d',boxShadow:'2px 2px 10px 0.01px #121212'}} >




                    <Table className="text-white"  striped  >
                        <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Code</th>
                            <th>Subject</th>
                            <th>FM</th>
                            <th>PM</th>
                            <th>MO</th>
                            <th>Total</th>
                            <th>Remarks</th>
                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>SH 601</td>
                            <td>Communication English</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>SH 602</td>
                            <td>Probability and Statics</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>CT 601</td>
                            <td>Software Engineering</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>CT 602</td>
                            <td>Data Communication</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>CT 603</td>
                            <td>Computer Organization and Architecture</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>EX 602</td>
                            <td>Instrumentation II</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>EX 603</td>
                            <td>Computer Graphics</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>

                        </tbody>

                        <tr>
                            <td className="text-right" colspan="3">Total</td>
                            <td>875</td>
                            <td>759</td>
                            <td>494</td>
                            <td>75</td>

                        </tr>

                    </Table>
                </Card>
                <br/>
                <Card body inverse style={{ backgroundColor: '#272a3d', borderColor: '#272a3d' ,boxShadow:'2px 2px 10px 0.01px #121212'}}>
                    <Table borderless className="text-white">
                        <tr>
                            <td >Marks Enter By</td>
                            <td className="text-right">Grand Total</td>

                        </tr>
                        <tr>
                            <td >
                                Date: 15 Feb, 2020
                            </td>
                            <td className="text-right">Result: Passed</td>
                        </tr>
                    </Table>
                </Card>
                <br/>
            </Container>
        );
    }
}
