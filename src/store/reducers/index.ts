
// import { combineReducers } from "redux";
// import counter from "./counter";

// const rootReducer = combineReducers({
//   counter
// });

// export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;

import {combineReducers} from 'redux'
import {AlarmListReducer} from './alarmList'

const rootReducer = combineReducers({
  AlarmListReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>