import React, { useEffect, useState } from 'react';
//import ApiService from '../../ApiService';
import axios from 'axios';

function WorkerListComponent(props) {
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

    // const reloadWorkerList = () => {
    //     ApiService.fetchWorkerByNo(workerState.no)
    //     .then( res => {
    //        setWorkerState({ worker: res.data })
    //     })
    //     .catch(err => {
    //         console.log('reloadWorkerList() error', err);
    //     })
    // }
    // const addWorker = () => {
    //     //props.history.push('/edit-worker');
    //     const url = "/worker/{workerState.no}"
    //     const header = {"Content-type":"application/json"}
    //     const data = {
    //         no: workerState.no,
    //         name: workerState.name,
    //         email: workerState.email,
    //         phone: workerState.phone
    //     }
    //     axios.post(url, data, header)
    //     .then( res => {
    //         console.log(res.data);
    //         //reloadWorkerList();
    //     })
    //     .catch(err => console.log('editWorker() error', err))
    // }
    
    const editWorker = () => {
        //props.history.push('/edit-worker');
        const url = "/worker/{workerState.no}"
        const header = {"Content-type":"application/json"}
        const data = {
            no: workerState.no,
            name: workerState.name,
            email: workerState.email,
            phone: workerState.phone
        }
        axios.put(url, data, header)
        .then( res => {
            console.log(res.data);
            //reloadWorkerList();
        })
        .catch(err => console.log('editWorker() error', err))
    }

    const deleteWorker = () => {
        const url = "/worker/{workerState.no}"
        axios.delete(url)
        .then( res => {
            console.log(res.data);
            //reloadWorkerList();
        })
        .catch(err => console.log('delete err', err))
    }
 
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
                        <td>{workerState.no}</td>
                        <td>{workerState.name}</td>
                        <td>{workerState.email}</td>
                        <td>{workerState.phone}</td>
                        <td>
                            <button onClick={() => editWorker()}>edit</button>
                            {/* <button onClick={() => addWorker()}></button> */}  
                            <button onClick={() => deleteWorker()}>delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    }
export default WorkerListComponent;