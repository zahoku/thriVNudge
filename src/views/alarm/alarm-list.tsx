import React, { useEffect } from 'react';
import { List } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

import {
  AlertOutlined,
  WarningOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';


// import { FETCH_ALARM_LIST } from '../../store/types/index'
import { fetchAlarmList, releaseAlarmItem } from '../../store/actions'
import {
  AlarmItem,
  ALARM_TYPES,
} from '../../types/index'


const AlarmListView: React.FC = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAlarmList())
  }, []);
  const {list} = useSelector((state:any) => {
    return state.AlarmListReducer
  });

  function handleClickReleaseAlarmItem(item: AlarmItem) {
    dispatch(releaseAlarmItem(item))
  }
  
 function getIconAndColor(type: string) {
  switch (type) {
    case ALARM_TYPES.ALERT:
      return <AlertOutlined style={{ color: 'red' }} />;
    case ALARM_TYPES.WARNING:
      return <WarningOutlined style={{ color: '#FFA500' }} />;
    case ALARM_TYPES.INFO:
      return <InfoCircleOutlined style={{ color: '#008000' }} />;
    default:
      return null;
  }
}
const ListItemStyled = styled(List.Item)<{ type: string }>`
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.type === ALARM_TYPES.ALERT ? '#ffe5e5' : 
                      props.type === ALARM_TYPES.WARNING ? '#fff3cd' :
                      props.type === ALARM_TYPES.INFO ? '#d4edda' : ''};
  }
`;

  return (
    <>
      <List
        size="large"
        header={<div>Alarm List</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={list}
        renderItem={(item: AlarmItem) => (
          <ListItemStyled 
            onClick={() => handleClickReleaseAlarmItem(item)}
            type={item.type}
          >
            {getIconAndColor(item.type)} {item.title}
            <p style={{opacity: .5, background: '#efefef', padding: '.5em', borderRadius: '.2em', color: '#000'}}>{item.content}</p>
          </ListItemStyled>
        )}
      />
    </>
  )
};

export default AlarmListView;