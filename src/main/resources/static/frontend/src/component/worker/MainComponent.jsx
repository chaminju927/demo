import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkerListComponent from './WorkerListComponent';
import { getWorker } from '../../slice/getWorkerSlice';
import { setNo } from '../../slice/inputSlice';
import axios from 'axios';

function MainComponent() {
    const [workerData, setWorkerData] = useState(  
        []
    );
    const [clickState, setClickState] = useState({
        searched: false,
    });
    const inputState = useSelector((state) => state.input);
    //const state = useSelector((state) => state.get.data);
    const dispatch = useDispatch();

    // const fetchData = () => {
    //     axios.get('/worker')
    //       .then((response) => {
    //         setWorkerData(response.data);
    //         console.log(response);
    //       })
    //       .catch((error) => {
    //         console.error('실패:', error);
    //       });
    // }
    useEffect(() => {
        axios.get('/worker')
          .then((response) => {
            setWorkerData(response.data);
            console.log(response);
          })
          .catch((error) => {
            console.error('실패:', error);
          });
      },[]); // 컴포넌트가 마운트될 때 한 번만 실행
    
    
    const inputChange = (e) => {
        const no = e.target.value;
        dispatch(setNo(no));
    }

    const searchBtn = () => {
        dispatch(getWorker(inputState.no)); //inputSlice에 저장된 state가져와서 사용
        setClickState({ searched : true }); 
    }
   
    if (clickState.searched) {
        return (
            <div>
                <WorkerListComponent />
            </div>
        );
    } else {
        return (
            <div>
                <h2>Search</h2>
                <input type="number" placeholder="사번 입력" onChange={inputChange}  />
                <button onClick={() =>searchBtn()}>search</button>

                <h2>WorkerList</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>no</th>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {workerData.map((worker, index) => (
                            <tr key={index}>
                            <td>{worker.no}</td>
                            <td>{worker.name}</td>
                            </tr>
                        ))}
                            {/* <tr>
                                <td>{workerData.no}</td>
                                <td>{workerData.name}</td>
                            </tr> */}
                        </tbody>
                    </table>
            </div>
        );
    }
}
export default MainComponent;