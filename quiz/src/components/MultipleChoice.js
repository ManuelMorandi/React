import { useContext, useState } from 'react';
import { QuestionsContext } from '../App';

export function MultipleChoice({questionNo, correctFn}) {
    const questions = useContext(QuestionsContext);
    const question = questions.find(q => q.id === questionNo);

    const [selected, setSelected] = useState(-1);

    const options = question.choices.map(option => {
        if(selected !== -1 && selected === option.id){
            const correct = selected === question.answer;
            const gotIt = correct ? "Right" : "Wrong";
            return <Choice key={option.id} option={option} answerFn={handleAnswer} answered={gotIt} />
        }
        return <Choice key={option.id} option={option} answerFn={handleAnswer} />
    })

    function handleAnswer(optionNo) {
        if(selected === -1){
            const answerWasCorrect = optionNo === question.answer;
            setSelected(optionNo);
            setTimeout(() => {
                correctFn(answerWasCorrect);
            }, 2000)
        }
    }

    return (
        <div className='multipleChoice'>
            <div className='header'>
                <h1>Pregunta numero {question.id}</h1>
            </div>
            <div className='question'>
                <h3>{question.question}</h3>
            </div>
            <div className='options'>
                <ul>
                    {options}
                </ul>
            </div>
        </div>
    )
}

function Choice({option, answerFn, answered}) {
    if(answered){
        return <p onClick={() => answerFn(option.id)} id={answered}>{option.info}</p>;
    }
    return <p onClick={() => answerFn(option.id)}>{option.info}</p>;
}