import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}


//React.FC - Specifying that it is a functional component
//<Props> - refers to the types we are going to use in this FC
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer,questionNr, totalQuestions}) =>{
    return(
        <div>
            <p className="number">
                Question: {questionNr}/ {totalQuestions}
            </p>
            {/* dangerouslySetInnerHtml={{__html:question}} */}
            <p> {question}</p>
            <div>
                {answers.map((answer)=>(
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            {/* dangerouslySetInnerHtml={{__html:answer}} */}
                            <span>{answer}</span> 
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard