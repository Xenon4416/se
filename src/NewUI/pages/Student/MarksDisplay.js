import React from 'react';
import { connect } from 'react-redux';
import {Table, CardSubtitle, Row, Col} from 'reactstrap';
import {Card, CardText, Label, CardBody,CardTitle} from "reactstrap";

//import './MarksDisplay.css';
import Button from "reactstrap/es/Button";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import Form from "reactstrap/es/Form";
import * as uris from '../../store/uris';
import * as actions from "../../store/actions/student";
class MarksDisplay extends React.Component {
    componentDidMount(){
        
       
    }
    
    render() {
        let recordDatas=[1,2,3,4];
        return(

            <Card className="myCardStyle">

                    <div className="studentClassTitle">
                        <CardTitle>Tribhuwan University</CardTitle>
                        <CardSubtitle>IOE, Pulchowk Campus, Lalitpur</CardSubtitle>
                        <CardBody>
                        <CardText>Bachelor's Degree in Computer Engineering</CardText>

                        </CardBody>

                    </div>

                    <div>
                        <Table className="studentListTable text-white" responsive >
                            <thead className="studentTableHead">
                            <tr>
                                <th>S.N</th>
                                <th>Subject</th>
                                <th>Assessment Marks</th>
                                <th>Practical Marks</th>
                            </tr>
                            </thead>
                            <tbody className="scroll">
                            {this.props.marks ?
                                this.props.marks[this.props.activeSem].map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{data.code}</td>
                                            <td>{data.m1}</td>
                                            <td>{data.m2}</td>                                           
                                        </tr>
                                    )
                                }) : null}
                            </tbody>
                        </Table>
                    </div>
            </Card>

        );
    }
}

const mapStateToProps = state => {
    return {
        activeSem:state.student.activeSem,
        marks:state.student.marks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MarksDisplay);