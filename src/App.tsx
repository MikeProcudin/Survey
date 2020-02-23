import React from 'react';
import SurveysList from './surveys/SurveysList/SurveysList';
import { Route, Router, Switch } from 'react-router-dom';
import Nav from './nav/nav';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './store';
import SurveyDetails from './surveys/SurveysDetails/SurveyDetails';
import SurveyChart from './surveys/SurveyChart/SurveyChart';


const createHistory = require("history").createBrowserHistory;
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <Router history={createHistory()}>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Switch>
                                <Route path="/" exact component={SurveysList} />
                                <Route path="/:id" exact component={SurveyChart} />
                                <Route path="/:id/details" component={SurveyDetails} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
