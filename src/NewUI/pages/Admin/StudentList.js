import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {Table, CardSubtitle, Row, Col} from 'reactstrap';
import {Card, CardText, Label, CardBody,CardTitle} from "reactstrap";
import './StudentList.css';
import Button from "reactstrap/es/Button";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import Form from "reactstrap/es/Form";
import * as uris from '../../store/uris';
import * as actions from "../../store/actions/admin";
import Spinner from '../../components/Spinner/Spinner.js';
class StudentList extends React.Component {
    componentDidMount(){
        let i;
        // console.log("check", this.props.teacherClassesStudentList[this.props.classIndex]);
        for(i=0;i<this.props.teacherClassesStudentList[this.props.classIndex].length;i++){
            if ((this.props.teacherClassesStudentList[this.props.classIndex][i].classId === this.props.activeClass) &&
                (this.props.teacherClassesStudentList[this.props.classIndex][i].sem === this.props.activeSem) &&
                (this.props.teacherClassesStudentList[this.props.classIndex][i].group === this.props.activeGroup)){
                this.props.setActiveStudentIndex(i);
                console.log("equality hit");
                break;
            }
        }
        //fetch(`http://localhost:3000/api/record/class?class=${this.props.tutorClass}&subjectCode=${this.props.subjectCode}&sem=1`)
        if (i === this.props.teacherClassesStudentList[this.props.classIndex].length){
            // let dat = this.props.classes.find((cls) => this.props.activeClass === cls.batch+cls.subCode+cls.group);
            // let sem = ((parseInt(this.props.activeSem[0])-1)*2+parseInt(this.props.activeSem[2])).toString();
            fetch(uris.FETCH_CLASS_STUDENT_lIST+'073BCESH603CD', { // TODO: change the hardcoded student list fetch
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then(res => res.json())
                .then(res => {
                    console.log("loaded");
                    this.props.setStudentValues({classId:this.props.activeClass, sem: this.props.activeSem, group: this.props.activeGroup, data: res.data, fm: res.fm});
                    this.props.setActiveStudentIndex(this.props.teacherClassesStudentList[this.props.classIndex].length-1);
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        // let recordDatas = this.props.classStudentValues.find((cls) => (this.props.activeClass === cls.classId) && (this.props.activeSem === cls.sem));
        let recordDatas = this.props.teacherClassesStudentList[this.props.classIndex][this.props.studentIndex];
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
            <Fragment>
                {this.props.loading ? <Spinner/> :
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
                                </tbody>
                            </Table>
                        </div>
                    </Card>}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        teacherClasses: state.admin.teacherClasses,
        teacherClassesStudentList: state.admin.teacherClassesStudentList,
        classIndex: state.admin.activeTeacherClassesIndex,
        studentIndex: state.admin.activeTeacherClassesStudentListIndex,
        activeClass: state.admin.activeClass,
        activeSem: state.admin.activeSem,
        activeGroup: state.admin.activeGroup,
        loading: state.admin.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setStudentValues: (values) => dispatch(actions.setTeacherClassesStudentList(values)),
        setActiveStudentIndex: (value) => dispatch(actions.setActiveTeacherClassesStudentListIndex(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);