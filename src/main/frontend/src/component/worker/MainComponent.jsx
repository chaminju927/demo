import React, { useState } from 'react';
import WorkerListComponent from './WorkerListComponent';

function MainComponent(props) {
  const [workerState, setWorkerState] = useState({
    no: '',
    name: '',
    email: '',
    phone: '',
    message: null
  });

  const workerNoChange = (event) => {
    setWorkerState({ ...workerState, no: event.target.value });
  };

  return (
    <div>
      <input
        type="number"
        placeholder="사원번호 입력"
        value={workerState.no}
        onChange={workerNoChange}
      />
      <button onClick={() => props.onSearch(workerState.no)}>조회</button>
      <WorkerListComponent
        workerNo={workerState.no}
      />
    </div>
  );
}

export default MainComponent;
