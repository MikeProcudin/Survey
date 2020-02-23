export interface Survey {
    surveyId: number
    title: string
    questions: Question[]
}

export interface Question {
    questionId: number
    questionTitle: string
    answerOptions: AnswerOption[]
}

export interface AnswerOption {
    answerOption: number
    text: string
    selectedByRespondents: number
}
