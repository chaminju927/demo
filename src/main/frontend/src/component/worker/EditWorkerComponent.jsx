import { useEffect, useState } from 'react';
import ApiService from '../../ApiService';

function EditWorkerComponent(props) {
    const [state, setState] = useState({
        no: '',
        name: '',
        email: '',
        phone: '',
        message: null
    });

    useEffect(() => {
        console.log('component mounted!');
        loadWorker();
    }, []);

    // loadWorker 함수를 선언
    const loadWorker = () => {
        ApiService.fetchWorkerByNo(window.localStorage.getItem("no"))
            .then(res => {
                let worker = res.data;
                setState({
                    no: worker.no,
                    name: worker.name,
                    email: worker.email,
                    phone: worker.phone
                })
            })
    }

    // onChange 핸들러 수정
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const saveWorker = (e) => {
        e.preventDefault();
        let worker = {
            no: state.no,
            name: state.name,
            email: state.email,
            phone: state.phone
        }

        ApiService.editWorker(worker)
            .then(res => {
                setState({ ...state, message: worker.name + ' 변경 완료' });
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
                    <input type="text" name="name" value={state.name} onChange={onChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={state.email} onChange={onChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="number" name="phone" value={state.phone} onChange={onChange} />
                </div>
                <button onClick={saveWorker}>save</button>
            </form>
        </div>
    );
}

export default EditWorkerComponent;
