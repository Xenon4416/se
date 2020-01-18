import React from 'react';
import './StudentView.css'

const StudentView = (props) => {
    return (
        <div className='Student'>
            <div className='roll'>{props.roll}</div>
            <div className='name'>{props.name}</div>
            <div className='pract_fm'>{props.pract_fm}</div>
            <div className='assess_fm'>{props.assess_fm}</div>
            <div className='pract_pm'>{props.pract_pm}</div>
            <div className='assess_pm'>{props.assess_pm}</div>
            <div className='pract_obt'>{props.pract_obt}</div>
            <div className='assess_obt'>{props.assess_obt}</div>
            <div className='Remarks'>{props.remarks}</div>
        </div>
    );
};

export default StudentView;