import React from 'react';
import {Button, Form, FormGroup,Row, Col, Label, Input, Table} from 'reactstrap';
import {Card} from "react-bootstrap";

export class StudentList extends React.Component {
    render() {
        return(
            <div>

                <br/>
                <Card style={{padding:'5px', backgroundColor: '#2a2438', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212'}}>
                    <Table responsive bordered style={{backgroundColor: '#2a2438'}} >
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
                            <td>1</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>2</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td>75</td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card>
         </div>
        );
    }
}