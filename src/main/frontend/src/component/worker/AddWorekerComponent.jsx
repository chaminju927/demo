import { useState } from 'react';
import ApiService from '../../ApiService';

function AddWorkerComponent(props){
    const [state, setState] = useState("");
    state = {
        no: '',
        name: '',
        email: '',
        phone: '',
        message: null
    }
    
    onChange = (e) => {
        setState({
            [e.target.no] : e.target.value
        })   
    }
    function saveWorker() {
        e.preventDefault();
        let worker = {
            no: state.no,
            name: state.name,
            email: state.email,
            phone: state.phone
        }
        ApiService.addWorker(worker)
        .then( res => {
            setState({ message: worker.name + '등록 완료' });
            console.log(state.message);
            props.history.push('/workers');
        })
        .catch( err => {
            console.log('saveWorker() 에러', err);
        })
    }

    return (
        <div>
            <h2>Add Worker</h2>
            <form>
                <div>
                    <label>No:</label>
                    <input type="number" name="no" value={state.no} onChange={state.no} />
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
    )    
}

export default AddWorkerComponent;