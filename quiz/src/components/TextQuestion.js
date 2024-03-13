import { useContext, useEffect, useState } from 'react';
import { QuestionsContext } from '../App';

export function TextQuestion({questionNo, correctFn}) {
    const questions = useContext(QuestionsContext);
    const question = questions.find(q => q.id === questionNo);

    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const [feedback, setFeedback] = useState(<></>);

    useEffect(() => {
        if(answered){
            const answerWasCorrect = question.answer === answer.toUpperCase();
            const text = answerWasCorrect ? "Correcto!" : "Incorrecto :(";
            setFeedback(<h4>{text}</h4>);
        }
    }, [answered]);

    function handleAnswer() {
        setAnswered(true);
        const answerWasCorrect = question.answer === answer.toUpperCase();
        setTimeout(() => {
            correctFn(answerWasCorrect);
        }, 2000)
    }

    const button = answer === "" ?
        <button disabled onClick={handleAnswer}>Enviar</button> :
        <button onClick={handleAnswer}>Enviar</button>;

    return (
        <div className='textQuestion'>
            <div className='header'>
                <h1>Pregunta numero {question.id}</h1>
            </div>
            <div className='question'>
                <h3>{question.question}</h3>
            </div>
            <div className='answer'>
                <input data-testid="answerTextbox" value={answer} onChange={e => setAnswer(e.target.value)} />
                {button}
            </div>
            <div className='feedback'>
                {feedback}
            </div>
        </div>
    )
}