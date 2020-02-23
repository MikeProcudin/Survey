import React from 'react';
import { withRouter } from 'react-router-dom';
import { Question, AnswerOption } from '../../store/survey/interfaces';

type Props = any


const answerOption = (answer: AnswerOption, key: number) => (
    <li {... { key }} className="list-group-item bg-dark text-wheat"> {`${answer.text} - ${answer.selectedByRespondents}`}</li>
)

const QuestionElem = (question: Question, key: number) => (
    <div {... { key }} className="col col-md-6">
        <div className="card bg-dark text-wheat mb-3 pt-5 pb-5 px-5">
            <h5 className="pb-4">{question.questionId}. {question.questionTitle}</h5>
            <ul className="list-group list-group-flush">
                {question.answerOptions.map((answer: AnswerOption, key: number) => answerOption(answer, key))}
            </ul>
        </div>
    </div>

)

const SurveyQuestions = (props: Props) => (props.survey.questions.map((question: Question, key: number) => (QuestionElem(question, key))))

export default withRouter(SurveyQuestions);
