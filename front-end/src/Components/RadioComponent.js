import React from 'react';
import '../Css/RadioComponent.css'


const RadioComponent = ({text}) => {
    return (
        // This component represents a single radio button option.
        // It receives a 'text' prop which is displayed next to the radio button.
        // The structure includes a div with class 'form-check-label' for styling,
        // and a span with class 'text' to hold the actual text content.
        <div className='form-check-label'>
            <span className='text'>{text}</span>
        </div>
    );
};

export default RadioComponent;