export type AlarmList = {
  list: Array<AlarmItem>,
  isLoading: boolean,
}

export type AlarmItem = {
  id: number,
  type: ALARM_TYPES,
  title: string,
  content: string,
}


export enum ALARM_TYPES {
  ALERT = 'ALERT',
  WARNING = 'WARNING',
  INFO = 'INFO',
}