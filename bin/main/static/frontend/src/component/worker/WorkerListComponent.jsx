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
        console.log(props);
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

    const inputChange = (e) => {
        setWorkerState({ ...workerState, [e.target.name]: e.target.value });
    }

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

    const saveWorker = () => {
        setWorkerState({ saveClicked : true })
        const header = {"Content-type":"application/json"}
        const data = {
            no: workerState.no,
            name: workerState.name,
            email: workerState.email,
            phone: workerState.phone
        }
        axios.post('/worker', data, header)
            .then(res => {
                console.log(res);
                //setWorkerState({ res.data });
            })
            .catch(err => {
                console.log('save 에러', err);
            })
    }

    switch(workerState.clicked){
        case 'add' :
            return (
                <div>
                <h2>Add Worker</h2>
                <form>
                    <div>
                        <label>No:</label>
                        <input type="number" name="no" value={workerState.no} onChange={inputChange} />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={workerState.name} onChange={inputChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={workerState.email} onChange={inputChange} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="number" name="phone" value={workerState.phone} onChange={inputChange} />
                    </div>
                    <button onClick={() => saveWorker()}>save</button>
                </form>
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
                    <EditWorkerComponent workerState={props.workerState} />
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
