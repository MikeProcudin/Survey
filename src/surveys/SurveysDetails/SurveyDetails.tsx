import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import SurveyQuestions from './SurveyQuestions';

const mapState = (state: RootState, OwnProps: any): any =>
    ({
        surveys: state.surveys,
        currentSurvey: state.surveys.list
            .filter(survey => survey.surveyId === parseInt(OwnProps.match.params.id))
            .reduce((prev: any, curr: any) => curr, 0)
    })

const connector = connect(mapState)

type Props = ConnectedProps<typeof connector>

const SurveyDetails = (props: Props) => (
    <div className="row">
        <div className="col-6 col-md-4 text-center mt-5 mb-5">
            <button className="list-group-item list-group-item-action bg-dark text-wheat shadow-sm border border-secondary" onClick={() => props.history.push('/')}> Back to Surveys </button>
        </div>
        <div className="col-6 offset-md-4 col-md-4 text-center mt-5 mb-5">
            <button className="list-group-item list-group-item-action bg-dark text-wheat shadow-sm border border-secondary" onClick={() => props.history.push(`/${props.currentSurvey.surveyId}`)}> Go to Chart </button>
        </div>
        {props.currentSurvey && <SurveyQuestions {...{ survey: props.currentSurvey }} />}
    </div>
)

export default connector(SurveyDetails);
