import './App.css';
import { createContext, useState } from 'react';
import { MultipleChoice } from './components/MultipleChoice';
import { TextQuestion } from './components/TextQuestion';

export const QuestionsContext = createContext();

function App() {
  const questions = [
    {
      type: "Text",
      id: 1,
      question: "Cual es el record de Undertaker en WrestleMania?",
      answer: "25-2",
    },
    {
      type: "Choice",
      id: 2,
      question: "Que titulo nunca gano John Cena?",
      choices: [
        {id: 0, info: "WWE Championship"},
        {id: 1, info: "United States Championship"},
        {id: 2, info: "Intercontinental Championship"},
        {id: 3, info: "World Heavyweight Championship"},
      ],
      answer: 2,
    }
  ];

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionComponent = getComponent();
  function getComponent() {
    if (currentQuestion >= questions.length) return <h1>Acertaste {correctAnswers}!</h1>;
    const question = questions[currentQuestion];
    let ret = <></>;
    const id = question.id;
    if(question.type === "Text") {
      ret = <TextQuestion key={id} questionNo={id} correctFn={handleAnswer} />
    } else {
      ret = <MultipleChoice key={id} questionNo={id} correctFn={handleAnswer} />
    }
    return ret;
  };

  function handleAnswer(correct){
    if(correct)
      setCorrectAnswers(correctAnswers + 1);
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <QuestionsContext.Provider value={questions}>
      <div className="App">
        {questionComponent}
      </div>
    </QuestionsContext.Provider>
  );
}

export default App;
