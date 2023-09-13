import React, { useEffect, useState } from 'react';
//import ApiService from '../../ApiService';
import axios from 'axios';

function MainComponent(props) {
    const [workerState, setWorkerState] = useState({
        no: props.no,
        name: props.name,
        email: props.email,
        phone: props.phone // mainComponent 에서 받아온 props를 초기값으로 설정
    });
  
    useEffect(()=>{
        console.log('component mounted!');
        //reloadWorkerList();
    }) 
    const searchWorker = () => {
      const header = {"Content-type":"application/json"}
      // const data = {
      //     no: workerState.no,
      //     name: workerState.name,
      //     email: workerState.email,
      //     phone: workerState.phone
      // }
      //const crossOriginIsolated = {withCredentials: true}
      // 이 부분에서 axios를 사용하여 GET 요청을 보냅니다.
      axios.get(`/worker/${workerState.no}`, header)
          .then(res => {
              console.log(res.data);
              props.history.push({
                  pathname: '/edit-worker', 
                  state: { workerData: res.data } // 데이터를 전달합니다.
              });
          })
          .catch(err => console.log('searchWorker() error', err))
    }
 
    return (
        <div>
            <h2>Worker</h2>
           <input type="number" placeholder="사번 입력"  />
           <button onClick={() =>searchWorker()}>search</button>
        </div>
    );
    }
export default MainComponent;
