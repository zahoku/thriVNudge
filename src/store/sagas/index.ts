import { all, fork, put, takeLatest } from "redux-saga/effects";
import { FETCH_ALARM_LIST } from "../types";
import {
  fetchAlarmListFailure,
  fetchAlarmListSuccess,
} from "../actions"
import { AlarmItem, AlarmList, ALARM_TYPES } from "../../types";

function getDummyAlarmListData() {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      {
        id: 1,
        type: ALARM_TYPES.WARNING,
        title: '주의 - 이상 행동이 감지되었습니다.',
        content: 'RDS Database(id)에서 의심스러운 쿼리 활동이 감지되었습니다.'
      },
      {
        id: 2,
        type: ALARM_TYPES.INFO,
        title: '정보 - 정기 점검이 예정되어 있습니다.',
        content: 'S3 Bucket(id)에 대한 정기 점검이 내일 예정되어 있습니다.'
      },
      {
        id: 3,
        type: ALARM_TYPES.ALERT,
        title: '경고 - 보안 위반 시도가 감지되었습니다.',
        content: 'IAM User(id)로부터 비정상적인 로그인 시도가 발생했습니다.'
      },
      {
        id: 4,
        type : ALARM_TYPES.WARNING,
        title : "주의 - 사용량 초과 알림",
        content : "Lambda function(id)의 실행 횟수가 제한 값을 초과하였습니다."
      }, 
      {
        id: 5,
        type : ALARM_TYPES.INFO,
        title : "정보 - 업데이트 알림",
        content : "DynamoDB Table(id)에 새로운 버전 업데이트가 있습니다."
      }, 
      {
        id: 6,
        type : ALARM_TYPES.ALERT, 
        title :"경고 - 서비스 중단 알림",
        content :"Elastic Load Balancer(id)에 연결된 서비스 중 일부가 응답하지 않습니다."
      },  
      { 
        id: 7,
        type : ALARM_TYPES.WARNING, 
        title :"주의 - 스토리지 공간 부족",
        content :"EBS Volume (id) 스토리지 공간이 부족합니다. "
      },  
      {  
        id: 8,
        type :ALARM_TYPES.INFO,  
        title:"정보- 신규 기능 출시",   
        content:"API Gateway에서 신규 기능을 출시하였습니다. 자세한 내용은 공식 문서를 참조하세요."   
      },
      {
        id: 9,
        type: ALARM_TYPES.ALERT,
        title: '경고 - 비상 알람이 발생했습니다.',
        content: 'EC2 instance(id)가 비정상적으로 terminate되었습니다.'
      },
      ]), 3000)
  })
}
function* fetchAlarmList() {
  const alarmList: AlarmList = {
    list: [],
    isLoading: true,
  }

  try {
    const data: AlarmItem[] = yield getDummyAlarmListData()
    
    alarmList.list = data
    yield put(fetchAlarmListSuccess(alarmList))

  } catch (e){
    yield put(fetchAlarmListFailure())
  } finally {
    alarmList.isLoading = false
  }
}

function* watchFetchAlarmList(){
  yield takeLatest(FETCH_ALARM_LIST, fetchAlarmList)
}

export default function* fetchAlarmListSaga(){
  yield all([fork(watchFetchAlarmList)])
}