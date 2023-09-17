import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { useDispatch } from 'react-redux';
import WorkerListComponent from './WorkerListComponent';
//import { getWorker } from './store/workerRedcuer';
import { configureStore } from '@reduxjs/toolkit';

function MainComponent(props) {
    const [workerState, setWorkerState] = useState({
        no: '',
        name: '',
        email: '',
        phone: '' ,
        searched: false
    });
    // //액션 디스패치 로직
    // const dispatch = useDispatch();
    // const fetchWorker = (workerNo) => {
    //   dispatch(getWorker(workerNo));
    
    useEffect(()=>{
        //console.log('component mounted!');
        //reloadWorkerList();
    }) 
    
    const inputChange = (e) => {
        setWorkerState ({ no :  e.target.value });
    }
    
    const searchWorker = () => {
        
        //configureStore.dispatch(getWorker());
        const url = `worker/${workerState.no}`
        //console.log(url);
        axios.get(url)
            .then(res => {
                console.log(res);
                 setWorkerState({ ...res.data, searched:true})
                 
            })
        .catch(err => console.log('searchWorker() error', err))
    }
 
    if (workerState.searched) {
        return (
            <div>
                <WorkerListComponent workerState={workerState}/>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Worker</h2>
                <input type="number" placeholder="사번 입력" onChange={inputChange}  />
                <button onClick={() =>searchWorker()} value={workerState.no}>search</button>
            </div>
        );
    }
}
export default MainComponent;
