import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import ApiService from '../../ApiService';

function EditWorkerComponent(props) {
    const [workerState, setWorkerState] = useState({
        no: props.no,
        name: props.name,
        email: props.email,
        phone: props.phone
    });

    useEffect(() => {
        console.log('EditComponent mounted!');
    });

    const inputChange = (e) => {
        setWorkerState({...workerState, [e.target.name]: e.target.value});
    }

    const saveWorker = () => {
        const header = {"Content-type":"application/json"}
        const data = {
            no: workerState.no,
            name: workerState.name,
            email: workerState.email,
            phone: workerState.phone
        }
        axios.put(`/worker/${data.no}`, data, header)
        .then( res => {
            console.log(res.data);
            //setWorkerState({ res.data });
            //props.history.push('/worker');
        })
        .catch( err => {
            console.log('editWorker() 에러', err);
        })
    }

    return (
        <div>
        <h2>Edit Worker</h2>
        <form>
            <div>
                <label>No:</label>
                <input type="number" name="no" value={props.workerState.no} readOnly={true} />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={props.workerState.name} onChange={inputChange}  />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={props.workerState.email} onChange={inputChange} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="number" name="phone" value={props.workerState.phone} onChange={inputChange} />
            </div>
            <button onClick={() => saveWorker()}>save</button>
        </form>
    </div>
    );
}

export default EditWorkerComponent;
