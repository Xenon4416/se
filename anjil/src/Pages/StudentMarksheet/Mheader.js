import React from 'react';
import { Card, CardTitle, Table, Button, ButtonGroup } from 'reactstrap';


export class Mheader extends React.Component {
    render() {
        return (
            <div>
                <Card body inverse style={{ backgroundColor: '#2a2438',boxShadow:'2px 2px 10px 0.01px #121212'}}>

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
            </div>
        );
    }
}
