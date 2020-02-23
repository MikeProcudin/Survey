import { surveysReducer } from "./survey/reducer"
import { combineReducers } from "redux"



export const  rootReducer = combineReducers({
    surveys: surveysReducer
})

export type RootState = ReturnType<typeof rootReducer>
