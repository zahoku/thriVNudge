import { AlarmList, AlarmItem } from "../../types";
import {
  FETCH_ALARM_LIST,
  FETCH_ALARM_LIST_SAGA_FAILURE,
  FETCH_ALARM_LIST_SAGA_SUCCESS,
  RELEASE_ALARM_ITEM,
  FETCH_ALARM_ITEM,
} from "../types";

export const fetchAlarmList = () => ({
  type: FETCH_ALARM_LIST,
})

export const fetchAlarmListFailure = () => ({
  type: FETCH_ALARM_LIST_SAGA_FAILURE
})

export const fetchAlarmListSuccess = (data: AlarmList) => ({
  type: FETCH_ALARM_LIST_SAGA_SUCCESS,
  payload: data
})

export const releaseAlarmItem = (item: AlarmItem) => ({
  type: RELEASE_ALARM_ITEM,
  payload: item,
})

export const fetchAlarmItem = (index: number) => ({
  type: FETCH_ALARM_ITEM,
  payload: {index}
})

export type ActionRequest = 
| ReturnType<typeof fetchAlarmList>
| ReturnType<typeof fetchAlarmListFailure>
| ReturnType<typeof fetchAlarmListSuccess>
| ReturnType<typeof releaseAlarmItem>
| ReturnType<typeof fetchAlarmItem>