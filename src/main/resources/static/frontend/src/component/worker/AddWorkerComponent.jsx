import { useState } from 'react';
import axios from 'axios';
import WorkerListComponent from './WorkerListComponent';
//import ApiService from '../../ApiService';

function AddWorkerComponent() {
    const [workerState, setWorkerState] = useState({
        no: '',
        name: '',
        email: '',
        phone: '',
        saveClicked: false
    });

    const inputChange = (e) => {
        setWorkerState({ [e.target.name]: e.target.value });
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
    if(workerState.saveClicked){
        return ( 
            <WorkerListComponent />
        )
    }
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
}

export default AddWorkerComponent;
