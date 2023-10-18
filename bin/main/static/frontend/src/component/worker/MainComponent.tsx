import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWorker, addWorker, deleteWorker} from '../../reducer/apiReducer';
import axios, * as others from 'axios';
import EditWorkerComponent from './EditWorkerComponent';
import { AppDispatch } from 'src/store';
import { listType, mainType } from 'src/types/common';
import { RootState } from 'src';

function MainComponent(): JSX.Element {
    const [workerData, setWorkerData] = useState<listType>({ 
        no: 0,
        name: '',
        phone: 0,
        email: ''
    });
    const [mainState, setMainState] = useState<mainType>({
      data : {  
        no: 0,
        name: '',
        phone: 0,
        email: '',
      },
        clicked: ''
    });

    useEffect(() => {
        axios.get('/worker')
        .then((response) => {
            console.log(response);
        });
        console.log("main mounted");
      },[]);  // workerData값에 의존성 추가

    //search이후 설정
    const {data} = useSelector((state : RootState) => {
        return {
            data: state.data
        };
    });
    //const data = useSelector((state: RootState) => state.data);
    const dispatch: AppDispatch = useDispatch();
    
    const inputNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWorkerData({ ...workerData, [e.target.name] : e.target.value });
       // console.log({workerData});
       console.log([e.target.name] , e.target.value );
    }
    //search worker
    const searchBtn = () => {
        console.log(workerData);
        dispatch(getWorker(workerData.no)); 
        setMainState({ ...mainState, clicked : 'search' });
    }

    //add worker 리턴
    const addBtn = () => {
        setMainState({ ...mainState, clicked: 'add'});
    }
    // delete 요청
     const deleteBtn = () => {
    //     setMainState({ ...mainState, data.no : data.no }); 
         dispatch(deleteWorker(data.no)); //파라미터 수정
         setMainState({  
            data : {  
                no: 0,
                name: '',
                phone: 0,
                email: '',
            },
            clicked: ''}); 
     }

     const mainBtn = () => {
        setMainState({  data : {  
            no: 0,
            name: '',
            phone: 0,
            email: '',
        },
        clicked: ''}); 
     }

    const editBtn = () => {
        setMainState({  
            data : {  
                no: data.no,
                name: data.name,
                phone: data.phone,
                email: data.email,
            },
            clicked: 'edit'}); 
       //console.log({mainState});
    }

    // // post요청
   const saveBtn = () => {
        console.log(mainState);
    //     setMainState({ ...mainState, clicked: '' });
        dispatch(addWorker(mainState)) 
        .then(() => {
            // input값 초기화 -> 메인에서 인풋값 공란으로
           //setMainState({ no: 0, name: '', phone: '', email: '', clicked: '' })
           console.log("edited");
        });
    };

    const addChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMainState({ ...mainState, [e.target.name]: e.target.value });
       
    };
    

   switch(mainState.clicked){
        case 'search' :  //search 결과
            return  (   
                <div>
                    <h2>Worker Info</h2>
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
                                <td>{data.no}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <button onClick={() => editBtn()}>edit</button>
                                    <button onClick={() => deleteBtn()}>delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={() => mainBtn()}>main</button> 
                    <button onClick={() => addBtn()}>add</button> 
                </div>
                );
        case 'add':
            return (
                <div>
                <h2>Add Worker</h2>
                <form>
                    <div>
                        <label>No:</label>
                        <input type="number" name="no"  onChange={addChange} />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={addChange}  />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={addChange} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="number" name="phone" onChange={addChange}/>
                    </div>
                    <button onClick={() => saveBtn()}>save</button>
                </form>
            </div>
            );
        case 'edit' : 
            return (
                <div>
                    <EditWorkerComponent />
                </div>
            )
        default  :
            return (
                <div>
                    <h2>Search</h2>
                    <input type="number" name="no" placeholder="사번 입력" onChange={inputNoChange}   />
                    <button onClick={() =>searchBtn()}>search</button>
                    <button onClick={() => addBtn()}>add</button> 

                    <h2>WorkerList</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>no</th>
                                    <th>name</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* {workerData.map((worker, index) => (
                                <tr key={index}>
                                <td>{worker.no}</td>
                                <td>{worker.name}</td>
                                </tr>
                            ))} */}
                            </tbody>
                        </table>
                </div>
            );
         

   }
  
  
}
export default MainComponent;