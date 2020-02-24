import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import SurveyItem from './SurveyItem';
import { Survey } from '../../store/survey/interfaces';

const mapState = (state: RootState): any => ({ surveys: state.surveys })

const connector = connect(mapState)

type Props = ConnectedProps<typeof connector>

const SurveyList = (props: Props) => (
    <div className="row d-flex justify-content-between">
        <div className="col-12">
            <h3 className="text-wheat mt-5 mb-5 col-12 text-center">Survey List</h3>
        </div>
        {props.surveys.list.map((survey: Survey, key: number) => <SurveyItem {...{ survey, key }} />)}
    </div>
)

export default connector(SurveyList);
