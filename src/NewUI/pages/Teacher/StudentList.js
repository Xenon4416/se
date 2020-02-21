import React from 'react';
import { connect } from 'react-redux';
import {Table, CardSubtitle, Row, Col} from 'reactstrap';
import {Card, CardText, Label, CardBody,CardTitle} from "reactstrap";
import './StudentList.css';
import Button from "reactstrap/es/Button";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import Form from "reactstrap/es/Form";
import * as uris from '../../store/uris';
import * as actions from "../../store/actions/teacher";
class StudentList extends React.Component {
    componentDidMount(){
        console.log("In Teacher",this.props); // TODO: change the url to uris.js
        let i;
        for(i=0;i<this.props.classStudentValues.length;i++){
            if (this.props.classStudentValues[i].Class === this.props.activeClass){
                break;
            }
        }
        //fetch(`http://localhost:3000/api/record/class?class=${this.props.tutorClass}&subjectCode=${this.props.subjectCode}&sem=1`)
        if (i === this.props.classStudentValues.length){
            let dat = this.props.classes.find((cls) => this.props.activeClass === cls.batch+cls.subCode+cls.group);
            let sem = ((parseInt(dat.sem[0])-1)*2+parseInt(dat.sem[2])).toString();
            fetch(uris.FETCH_CLASS_STUDENT_lIST+'073BCESH603CD'+'&sem=5', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then(res => res.json())
                .then(res => {
                    this.props.setClassStudentValues({Class:this.props.activeClass, data: res.data});
                    this.setState({studentRecords: {Class:this.props.activeClass, data: res.data}});
                    console.log("second then", this.state.studentRecords);
                })
                .catch(err => console.log(err));

        }
    }
    render() {
        let recordDatas = this.props.classStudentValues.find((cls) => this.props.activeClass === cls.Class);
        // if(this.state.studentRecords.length){
        //     recordDatas=this.state.studentRecords.map((record,index)=>(
        //         <tr>
        //             <td>{index+1}</td>
        //             <td>{record.username}</td>
        //             <td>20</td>
        //             <td>8</td>
        //             <td>{record.test}</td>
        //             <td>Excellent</td>
        //          </tr>
        //     ))
        // }
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
                                <th>Roll No</th>
                                <th>Full Name</th>
                                <th>Assessment Marks</th>
                                <th>Practical Marks</th>
                            </tr>
                            </thead>
                            <tbody className="scroll">
                            {recordDatas ?
                                recordDatas.data.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{data.username}</td>
                                            <td>Full Name</td>
                                            <td>{data.test}</td>
                                            <td>{data.practical}</td>
                                        </tr>
                                    )
                                }) : null}
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>

                            </tbody>



                        </Table>
                    </div>
            </Card>

        );
    }
}

const mapStateToProps = state => {
    return {
        classes: state.teacher.classes,
        classStudentValues: state.teacher.classStudentValues,
        activeClass: state.teacher.activeClass
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setClassStudentValues: (values) => dispatch(actions.setClassStudentValues(values))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);