import React from 'react';
import Question from './Question';
import '../styles/Faq.css';
import question from '../images/QUESTION IMAGE.png';

const Faq = () => {
    const questionBox = [
        {id:1 ,number: '01', question: 'What is the purpose of SMM panels?', answer:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
        {id:2 ,number: '02', question: 'What SMM services can I purchase on this panel?', answer:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself'},
        {id:3 ,number: '03', question: 'Is it safe to order SMM services on your panel?', answer:'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content'},
        {id:4 ,number: '04', question: 'What does a "mass order" mean?', answer:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
        {id:5 ,number: '05', question: 'How is the Drip-feed feature used?', answer:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
        {id:6 ,number: '06', question: 'How does the mass order feature work?', answer:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'}
    ]
    return (
        <div className='w-100'>
            <div className='last-bg'></div>
            <div className='faq-container'>
                <div className='faq-title'>
                    <div className='glow-area-five'></div>
                    <h2>FAQ</h2>
                    <p>Answer to some possible questions you might have</p>
                </div>
                <div className='faq-section'>
                    <div>
                       {questionBox.map(item => <Question key={item.id} 
                       number={item.number} question={item.question} answer={item.answer} />)}
                    </div>
                    <div className='question-img'>
                        <img src={question} alt='image' />
                    </div>
                    <div className='question-img-mobile'></div>
                </div>
            </div>
        </div>
    );
};

export default Faq;