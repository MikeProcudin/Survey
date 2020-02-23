import { SurveysState, SurveysActionTypes, SET_SURVEY_LIST } from "./types";

const initialState: SurveysState = {
    list: []
}

export function surveysReducer(
    state = initialState,
    action: SurveysActionTypes
): SurveysState {
    switch (action.type) {
        case SET_SURVEY_LIST:
            return { list: action.payload };
        default:
            return state;
    };
}
