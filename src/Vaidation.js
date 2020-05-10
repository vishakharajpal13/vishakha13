import React from 'react';
import ReactDOM from 'react-dom';

const Validation = (props)=>{

var output=  "Enter the value" ; 

if (props.textlength>5)
{

    output="Long Enough"}
    else
    
    output="Text length Too short"


return (<div> {output}



</div>)

}

export default Validation;