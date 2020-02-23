import React from 'react';
import { withRouter } from 'react-router-dom';

type Props = any

const SurveyItem = (props: Props) => (
        <div className="card border border-secondary bg-dark w-30" >
            <div className="card-body text-wheat">
                <h5 className="card-title"> {props.survey.title}</h5>
                <div className="row">
                    <div className="col">
                        <button type="button" onClick={() => props.history.push({ pathname: `${props.survey.surveyId}`, state: { survey: props.survey } })}
                            className=" btn border border-secondary bg-dark text-wheat">Go To Chart
                    </button>
                    </div>
                    <div className="col">
                        <button type="button" onClick={() => props.history.push({ pathname: `/${props.survey.surveyId}/details`, state: { survey: props.survey } })}
                            className="btn border border-secondary bg-dark text-wheat text-nowrap" >Go To Details
                    </button>
                    </div>
                </div>
            </div>
        </div>
)

export default withRouter(SurveyItem);
