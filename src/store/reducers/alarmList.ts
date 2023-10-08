import produce from "immer";
import { FETCH_ALARM_LIST_SAGA_SUCCESS, RELEASE_ALARM_ITEM } from "../types";
import { AlarmList } from "../../types";

import { ActionRequest } from "../actions";

const initialState: AlarmList = {
  list: [],
  isLoading: true,
};

export const AlarmListReducer = (
  state: AlarmList = initialState,
  action: ActionRequest
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_ALARM_LIST_SAGA_SUCCESS:
        draft.list = action.payload.list;
        break;
      case RELEASE_ALARM_ITEM:
        draft.list.splice(draft.list.findIndex(item => item.id === action.payload.id), 1)
        break;
      default:
        return state;
    }
  });
};
