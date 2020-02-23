import { Survey } from './interfaces';
import { SurveysActionTypes, SET_SURVEY_LIST } from './types';

export function setSurveys(survey: Survey[]): SurveysActionTypes {
    return {
        type: SET_SURVEY_LIST,
        payload: survey
      }
}
