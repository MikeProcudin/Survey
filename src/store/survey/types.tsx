import { Survey } from "./interfaces";

export const SET_SURVEY_LIST = 'SET_SURVEY_LIST';



interface setSurveys {
    type: typeof SET_SURVEY_LIST
    payload: Survey[]
}


export interface SurveysState {
    list: Survey[]
}

export type SurveysActionTypes = setSurveys;


