import React, { useEffect, useState } from 'react';
import ApiService from '../../ApiService';

function EditWorkerComponent(props) {
    const [workerState, setWorkerState] = useState({
        no: '',
        name: '',
        email: '',
        phone: '',
        message: null
    });
    useEffect(() => {
        console.log('component mounted!');
        loadWorker();
    });

 
    // onChange 핸들러 수정
    const onChange = (e) => {
        setWorkerState({...state, [e.target.name]: e.target.value});
    }

    const saveWorker = (e) => {
        e.preventDefault();
        let worker = {
            no: state.no,
            name: state.name,
            email: state.email,
            phone: state.phone
        }

        ApiService.editWorker(worker)  //put 요청
        .then( res => {
            setWorkerState({ worker, message: worker.name + '변경 완료' });
            console.log(state.message);
            console.log(res.data);
            props.history.push('/worker');
        })
        .catch( err => {
            console.log('editWorker() 에러', err);
        })

        ApiService.editWorker(worker)
            .then(res => {
                setWorkerState({ ...state, message: worker.name + ' 변경 완료' });
                console.log(state.message);
                console.log(res.data);
                props.history.push('/worker');
            })
            .catch(err => {
                console.log('editWorker() 에러', err);
            })
    }

    return (
        <div>
        <h2>Edit Worker</h2>
        <form>
            <div>
                <label>No:</label>
                <input type="number" name="no" value={state.no} readOnly={true} />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={state.name} onChange={state.name} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={state.email} onChange={state.email} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="number" name="phone" value={state.phone} onChange={state.phone} />
            </div>
            <button onClick={saveWorker}>save</button>
        </form>
    </div>
    );
}

export default EditWorkerComponent;
