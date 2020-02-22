const baseURI = 'http://localhost:3000';
export const LOGIN = baseURI+'/api/users/login';
export const ASSIGN_TEACHER = baseURI+'/api/users/assignTeacher';
export const ADD_TEACHER = baseURI+"/api/classes/addTeacher";
export const FETCH_CLASSLIST = baseURI+'/api/users/classes?username=';
export const FETCH_CLASS_STUDENT_lIST = baseURI+'/api/record/class?classId=';
export const POST_MARKS = baseURI+'/api/record/class';