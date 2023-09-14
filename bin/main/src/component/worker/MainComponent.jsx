import React, { useEffect, useState } from 'react';
//import ApiService from '../../ApiService';
import axios from 'axios';
import WorkerListComponent from './WorkerListComponent';

function MainComponent(props) {
    const [workerState, setWorkerState] = useState({
        no: '',
        name: '',
        email: '',
        phone: '' ,
        searched: false
    });
  
    useEffect(()=>{
        //console.log('component mounted!');
        //reloadWorkerList();
    }) 

    const inputChange = (e) => {
        //console.log(e.target.value);
        setWorkerState ({ no :  e.target.value });
    }

    const searchWorker = () => {
        const url = `worker/${workerState.no}`
        console.log(url);
        //const header = { "Content-Type": "application/json" }
        // axios.get(url)
        //     .then(res => {
        //         console.log(res);
        //         // props.history.push({
        //         //     pathname: '/edit-worker', 
        //         //     //state: { workerState: res.data } 
        //         // });
        //         // setWorkerState({ searched: true })
        //     })
        // .catch(err => console.log('searchWorker() error', err))
    }
 
    if(searchWorker){
    //if (workerState.searched) {
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
                <button onClick={() =>searchWorker()} value={workerState.no}>search</button>
            </div>
        );
    }
}
export default MainComponent;
