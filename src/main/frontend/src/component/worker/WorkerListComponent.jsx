import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
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
=======
import ApiService from '../../ApiService';

function WorkerListComponent(props) {
  const [workerState, setWorkerState] = useState({
    no: '', 
    name: '',
    email: '',
    phone: '',
    message: null,
     workers: [] 
  });

  useEffect(() => {
    console.log('component mounted!');
    reloadWorkerList();
  }, []);

  const reloadWorkerList = () => {
    // 이전에는 fetchWorkerByNo()를 호출했으나, 이제는 props로 전달받은 workerNo를 사용하여 API 호출
    ApiService.fetchWorkerByNo(props.workerNo)
      .then((res) => {
        setWorkerState({ workers: [res.data] }); 
      })
      .catch((err) => {
        console.log('reloadWorkerList() error', err);
      });
  };
  const editWorker = (worker) => {
    window.localStorage.setItem("worker", JSON.stringify(worker));
    props.history.push('/edit-worker');
  };

  const deleteWorker = (no) => {
    ApiService.deleteWorker(no)
        .then(res => {
            console.log(res.data);
            setWorkerState(prevState => ({
                ...prevState,
                message: 'Successfully deleted'
            }));
            setWorkerState(prevState => ({
                ...prevState,
                workers: prevState.workers.filter(worker => worker.no !== no)
            }));
        })
        .catch(err => {
            console.log('delete err', err);
        });
    };

  return (
    <div>
      <h2>Worker Info</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workerState.workers.map((worker) => (
            <tr key={worker.no}>
              <td>{worker.no}</td>
              <td>{worker.name}</td>
              <td>{worker.email}</td>
              <td>{worker.phone}</td>
              <td>
                <button onClick={() => editWorker(worker)}>Edit</button>
                <button onClick={() => deleteWorker(worker.no)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkerListComponent;



// import { useEffect, useState } from 'react';
// import ApiService from '../../ApiService';

// function WorkerListComponent(props) {
//     const [workerState, setWorkerState] = useState({
//         no: '',
//         name: '',
//         email: '',
//         phone: '',
//         message: null
//     });

//     useEffect(() => {
//         console.log('component mounted!');
//         reloadWorkerList();
//     }, []);

//     const reloadWorkerList = () => {
//         ApiService.fetchWorkerByNo()
//             .then(res => {
//                 setWorkerState({ workers: res.data });
//             })
//             .catch(err => {
//                 console.log('reloadWorkerList() error', err);
//             });
//     };

//     const editWorker = (worker) => {
//         window.localStorage.setItem("worker", JSON.stringify(worker));
//         props.history.push('/edit-worker');
//     };

//     const deleteWorker = (no) => {
//         ApiService.deleteWorker(no)
//             .then(res => {
//                 console.log(res.data);
//                 setWorkerState(prevState => ({
//                     ...prevState,
//                     message: 'Successfully deleted'
//                 }));
//                 setWorkerState(prevState => ({
//                     ...prevState,
//                     workers: prevState.workers.filter(worker => worker.no !== no)
//                 }));
//             })
//             .catch(err => {
//                 console.log('delete err', err);
//             });
//     };

//     return (
//         <div>
//             <h2>Worker</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {workerState.workers.map(worker => (
//                         <tr key={worker.no}>
//                             <td>{worker.no}</td>
//                             <td>{worker.name}</td>
//                             <td>{worker.email}</td>
//                             <td>{worker.phone}</td>
//                             <td>
//                                 <button onClick={() => editWorker(worker)}>Edit</button>
//                                 <button onClick={() => deleteWorker(worker.no)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default WorkerListComponent;
>>>>>>> 8faa17d038c436ad2dfd9d92a6679511625256be
