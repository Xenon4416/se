import React from 'react';
import { Table} from 'reactstrap';
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import Form from "reactstrap/es/Form";
import {Col, Row} from 'reactstrap';
import './MarksEntry.css'
import tu from "../../assests/tu logo official.png"
import * as actions from "../../store/actions/teacher";
import connect from "react-redux/es/connect/connect";

class MarksEntry extends React.Component {
    onMarksChangeHandler(event, type, index){
        console.log(this.props.activeSem);
        if (parseInt(event.target.value)>=0 && parseInt(event.target.value) <= 20){
            this.props.updateClassStudentValues(parseInt(event.target.value), type, index);
        }
        console.log("on marks update", this.props.activeSem, this.props.classStudentValues)
    }
    render() {
        let recordDatas = this.props.classStudentValues[this.props.classIndex];
        return(
               <div className="myCardStyle">
                    <Form className="myForm">;

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
                            <th>Assessment Marks</th>
                            <th>Practical Marks</th>
                            <th>Remarks</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            recordDatas.data.map((data,index) => {
                                return <tr className="text-white" key={index}>
                                    <td className="text-center">{index+1}</td>
                                    <td>{data.username}</td>
                                    <td>Full Name</td>
                                    <td><Input type='number' onChange={(event) => this.onMarksChangeHandler(event,'asmnt', index)} value={data.test}/></td>
                                    <td><Input type='number' onChange={(event) => this.onMarksChangeHandler(event,'pract', index)} value={data.practical}/></td>
                                    <td>Excellent</td>
                                </tr>
                            })
                        }
                        </tbody>
                        <tr>
                                <td colSpan="5" className="text-right">Action</td>
                        <td><Button onClick={} outline className="text-white" color="success">Submit</Button></td>
                        </tr>

                    </Table>
               </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        classes: state.teacher.classes,
        classStudentValues: state.teacher.classStudentValues,
        classIndex: state.teacher.activeClassStudentValuesIndex,
        activeClass: state.teacher.activeClass,
        activeSem: state.teacher.activeSem
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setClassStudentValues: (values) => dispatch(actions.setClassStudentValues(values)),
        updateClassStudentValues: (value, type, index) => dispatch(actions.updateClassStudentValues(value, type, index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MarksEntry);