import React from 'react';

function Student (props) {
    return(
        <div>
            <h1> My name is {props.studentName} </h1>
            <h1> My Zodiac Sign is : {props.zodiacSign} </h1>
        </div>
    )
}
export default Student;