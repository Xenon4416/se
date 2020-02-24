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
    onMarksChangeHandler(event, type, index, fm){
        let theNumber=event.target.value*1;
        if (!theNumber)
        {
            this.props.updateClassStudentValues(0,type,index);
        }
        else {
            console.log("ndfsd",theNumber, fm, type);
            if (type === 'asmnt'){
                if (theNumber >= 0 && theNumber <= fm.asmnt){
                    document.getElementById('i1').value = '';
                    this.props.updateClassStudentValues(theNumber, type, index);
                }
            }else if(type === 'pract'){
                if (theNumber >= 0 && theNumber <= fm.pract){
                    document.getElementById('i2').value = '';
                    this.props.updateClassStudentValues(theNumber, type, index);
                }
            }
        }
    }

    onMarksSubmitHandler(event){
        event.preventDefault();
        let tempData = {...this.props.classStudentValues[this.props.classIndex]};
        tempData.sem = (parseInt(this.props.activeSem[0])-1)*2+parseInt(this.props.activeSem[2]);
        let temo = {classId:tempData.classId, sem:tempData.sem, datas: tempData.data};
        this.props.submitMarks(tempData);
        console.log(tempData)
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
                                    <td><Input type='number' id='i1' onChange={(event) => this.onMarksChangeHandler(event,'asmnt', index, recordDatas.fm)} value={data.test}/></td>
                                    <td><Input type='number' id='i2' onChange={(event) => this.onMarksChangeHandler(event,'pract', index, recordDatas.fm)} value={data.practical}/></td>
                                    <td>Excellent</td>
                                </tr>
                            })
                        }
                        <tr>
                                <td colSpan="5" className="text-right">Action</td>
                        <td><Button onClick={(event) => this.onMarksSubmitHandler(event)} outline className="text-white" color="success">Submit</Button></td>
                        </tr>
                        </tbody>

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
        updateClassStudentValues: (value, type, index) => dispatch(actions.updateClassStudentValues(value, type, index)),
        submitMarks: (data) => dispatch(actions.submitMarks(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MarksEntry);