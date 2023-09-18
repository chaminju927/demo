import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkerListComponent from './WorkerListComponent';
import { getWorker } from '../../slice/getWorkerSlice';
import { setNo } from '../../slice/inputSlice';

function MainComponent() {
    const [clickState, setClickState] = useState({
        searched: false
    });
 
    const dispatch = useDispatch();

    useEffect(()=>{
        //console.log('Maincomponent mounted!');
    }) 
    
    const inputChange = (e) => {
        const no = e.target.value;
       // console.log(no);
        dispatch(setNo(no));
    }
    const state = useSelector(state => state);
   // console.log(state);

    const searchWorker = () => {
        dispatch(getWorker(state.input.no)); //inputSlice에 저장된 state가져와서 사용
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
                <h2>Worker</h2>
                <input type="number" placeholder="사번 입력" onChange={inputChange}  />
                <button onClick={() =>searchWorker()}>search</button>
            </div>
        );
    }
}
export default MainComponent;
