import React, { useState } from 'react';
import axios from 'axios';
import WorkerListComponent from './WorkerListComponent';
//import ApiService from '../../ApiService';

function MainComponent(props) {
  const [workerState, setWorkerState] = useState({
    no: '',
    name: '',
    email: '',
    phone: '',
    clicked: false
  });

  const numChange = (e) => {
    //console.log(e.target.value);
    setWorkerState({ ...workerState , no: e.target.value });
  };
 
  const searchWorker = () => {
    const no = workerState.no;
    const url = "/worker/no"
    //const header = {"Content-type":"application/json"}
  
    axios.get(url)
    .then( res => {
        console.log(res.data);
        props.history.push('/worker');  //WorkerListComponent로 props전달
    })
    .catch( err => console.log('searchWorker() 에러', err))
  }
    

  return (
    <div>
      <input
        type="number"
        placeholder="사원번호 입력"
        value={workerState.no}
        onChange={numChange}
      />
      <button id="btn" onClick={() => searchWorker()}>search</button>
      <div>
      {/* <WorkerListComponent />   조건부 렌더링으로 바꾸기 */}
      </div>
    </div>
  );
}

export default MainComponent;
