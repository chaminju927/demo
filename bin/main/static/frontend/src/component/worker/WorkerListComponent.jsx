import React, { useEffect, useState } from 'react';
//import ApiService from '../../ApiService';
import axios from 'axios';
import AddWorkerComponent from './AddWorkerComponent';
import MainComponent from './MainComponent';
import EditWorkerComponent from './EditWorkerComponent';

function WorkerListComponent(props) {
    const [workerState, setWorkerState] = useState({
        no: props.no,
        name: props.name,
        email: props.email,
        phone: props.phone, // mainComponent 에서 받아온 props
        clicked: ''
    });
  
    useEffect(()=>{
        console.log('liscomponent mounted!');
        //reloadWorkerList();
    }) 

    // const reloadWorkerList = () => {
    //     const header = {"Content-type":"application/json", "Origin":"http://localhost:3000"}
    //     axios.get(`/worker/${workerState.no}`, header)
    //     .then( res => {
    //         console.log(res.data);
    //         //setWorkerState({ worker: res.data })
    //     })
    //     .catch(err => {
    //         console.log('reloadWorkerList() error', err);
    //     })
    // }
    const addWorker = () => {
        setWorkerState({ ...workerState, clicked : 'add' })
    }
    
    const deleteWorker = () => { 
        //setWorkerState({ ...workerState, clicked : 'delete' })

        axios.delete(`/worker/${workerState.no}`)
        .then( res => {
            console.log(res.data);
            //reloadWorkerList();
        })
        .catch(err => console.log('delete err', err))
    }

    const editWorker = () => {
        setWorkerState({ ...workerState, clicked: 'edit'})
    }

    switch(workerState.clicked){
        case 'add' :
            return (
                <div>
                    <AddWorkerComponent workerState={workerState} />
                </div>
            )
        case 'delete' :
            return (
                <div>
                    <MainComponent workerState={workerState} />
                </div>
            )
        case 'edit' :  
            return (
                <div>
                    <EditWorkerComponent workerState={workerState} />
                </div>
            );
            default : 
              return (
                <div>
                    <h2>Worker</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>no</th>
                                <th>name</th>
                                <th>email</th>
                                <th>phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.workerState.no}</td>
                                <td>{props.workerState.name}</td>
                                <td>{props.workerState.email}</td>
                                <td>{props.workerState.phone}</td>
                                <td>
                                    <button onClick={() => editWorker()}>edit</button>
                                    <button onClick={() => addWorker()}>add</button>  
                                    <button onClick={() => deleteWorker()}>delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
    }

}
    
export default WorkerListComponent;
