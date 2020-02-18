import React from 'react';
import { Card, Table } from 'reactstrap';
export class MFooter extends React.Component {
    render(){
        return(
            <div>
                <Card body inverse style={{ backgroundColor: '#353A40', borderColor: '#333' }}>
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
            </div>

        );
    }
}