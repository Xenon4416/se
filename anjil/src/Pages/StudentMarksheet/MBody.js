import React from 'react';
import { Table, Card, Button } from 'reactstrap';
import {blue} from "@material-ui/core/colors";

export class MBody extends React.Component {
    render(){

        return (
            <Card style={{padding:'10px',backgroundColor:'#2a2438'}} >




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
        );
    }
}