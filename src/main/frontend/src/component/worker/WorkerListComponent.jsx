import { useEffect, useState } from 'react';
import ApiService from '../../ApiService';

function WorkerListComponent(props) {
    const [state, setState] = useState("");
    state = {
        workers: [],
        message: null
    }
  
    useEffect(()=>{
        console.log('component mounted!');
        reloadWorkerList();
    },[]) //비어있는 배열이 있다는것을 알려줘야함!

    reloadWorkerList = () => {
        ApiService.fetchWorkers()
        .then( res => {
           setState({ workers: res.data })
        })
        .catch(err => {
            console.log('reloadWorkerList() error', err);
        })
    }
    
    function editWorker(worker) {
        window.localStorage.setItem("worker", worker);
        props.history.push('/edit-worker');
    }

    function deleteWorker(no) {
        ApiService.deleteWorker(no)
        .then( res => {
            console.log(res.data);
            setState({ message: 'deleted successfully' });
            setState({ workers: state.workers.filter( workers => worker.no !== no) });
        })
        .catch(err => {
            console.log('delete err', err);
        })
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
                        <td>{worker.no}</td>
                        <td>{worker.name}</td>
                        <td>{worker.email}</td>
                        <td>{worker.phone}</td>
                        <td>
                            <button onClick={editWorker(worker.no)}></button>
                            <button onClick={addWorker(worker)}></button>
                            <button onClick={deleteWorker(worker.no)}></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    }
export default WorkerListComponent;