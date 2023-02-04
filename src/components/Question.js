import React, {useState} from 'react';
import arrowDown from '../images/logo-Icon.png';
import '../styles/Question.css';

const Question = (props) => {
    const[open, setOpen] = useState(false);
    return (
        <>
            <div className='question-answer-box'>
                <a className='text-decoration-none' onClick={() => setOpen(!open)}>
                    <div className='question-box-one'>
                        <span>{props.number}</span>
                        <h3>{props.question}</h3>
                    </div>
                    <div className={open ? 'question-box-two' : 'question-box-three'}>
                        <img src={arrowDown} alt='arrow' />
                    </div>    
                </a> 
                <div className={open ? 'answer-box': 'closed-box'}>
                <p>{open && props.answer}</p>
            </div>
            </div>
            
        </>
       
    );
};

export default Question;