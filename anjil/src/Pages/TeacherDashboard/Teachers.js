import React from 'react';
import {
    Table, Card, Button
} from 'reactstrap';
import {ButtonGroup} from "react-bootstrap";

export class Teachers extends React.Component {
    render() {
        return (
            <div>
                
                <Card style={{backgroundColor: '#2a2438', padding:'10px', marginTop: '30px'}}>
                <Table className="text-white">
                    <tr>
                        <td>NAME</td>
                        <td>USERNAME</td>
                        <td>EMAIL</td>
                        <td>BIRTHDAY</td>
                        <td>OPTIONS</td>
                    </tr>

                    <tr>
                        <td>Dr. Aman Shakya</td>
                        <td>amanshakya</td>
                        <td>amanshakya@gmail.com</td>
                        <td>1980/07/23</td>
                        <td><ButtonGroup>
                            <Button outline color="success">Profile</Button>
                        </ButtonGroup></td>
                    </tr>
                    <tr>
                        <td>Dr. Aman Shakya</td>
                        <td>amanshakya</td>
                        <td>amanshakya@gmail.com</td>
                        <td>1980/07/23</td>
                        <td><ButtonGroup>
                            <Button outline color="success">Profile</Button>
                        </ButtonGroup></td>
                    </tr>
                    <tr>
                        <td>Dr. Aman Shakya</td>
                        <td>amanshakya</td>
                        <td>amanshakya@gmail.com</td>
                        <td>1980/07/23</td>
                        <td><ButtonGroup>
                            <Button outline color="success">Profile</Button>
                        </ButtonGroup></td>
                    </tr>
                    <tr>
                        <td>Dr. Aman Shakya</td>
                        <td>amanshakya</td>
                        <td>amanshakya@gmail.com</td>
                        <td>1980/07/23</td>
                        <td><ButtonGroup>
                            <Button outline color="success">Profile</Button>
                        </ButtonGroup></td>
                    </tr>
                    <tr>
                        <td>Dr. Aman Shakya</td>
                        <td>amanshakya</td>
                        <td>amanshakya@gmail.com</td>
                        <td>1980/07/23</td>
                        <td><ButtonGroup>
                            <Button outline color="success">Profile</Button>
                        </ButtonGroup></td>
                    </tr>
                    <tr>
                        <td>Dr. Aman Shakya</td>
                        <td>amanshakya</td>
                        <td>amanshakya@gmail.com</td>
                        <td>1980/07/23</td>
                        <td><ButtonGroup>
                            <Button outline color="success">Profile</Button>
                        </ButtonGroup></td>
                    </tr>

                </Table>

            </Card>


            </div>




        );
    }
}

