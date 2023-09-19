import React, { useEffect, useState } from 'react';
import MainComponent from './MainComponent';
import EditWorkerComponent from './EditWorkerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setNo, setName, setEmail, setPhone, resetNo, resetName, resetEmail, resetPhone } from '../../slice/inputSlice';
import { addWorker } from '../../slice/addWorkerSlice'
import { deleteWorker } from '../../slice/deleteWorkerSlice';
//import { getWorker } from '../../slice/getWorkerSlice'

function WorkerListComponent() {
    const [clickState, setClickState] = useState({
        clicked : ''
    });

    const state = useSelector((state) => state.get.data);
    //console.log(state);
    const inputState = useSelector((state) => state.input);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        //console.log('liscomponent mounted!');
        //dispatch(getWorker(inputState.no));

        //state를 iputstate으로 복사
        // dispatch(setName(state.name));
        // dispatch(setEmail(state.email));
        // dispatch(setPhone(state.phone));
    });

     // 스토어에 상태값 저장
     const inputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
          case 'no':
            dispatch(setNo(value));
            break;
          case 'name':
            dispatch(setName(value));
            break;
          case 'email':
            dispatch(setEmail(value));
            break;
          case 'phone':
            dispatch(setPhone(value));
            break;
          default:
            break;
        }
      };
    
    //post 요청
    const saveBtn = () => {
       setClickState({ clicked : 'info' });
       dispatch(addWorker(inputState));
    }
    //delete 요청
    const deleteBtn = () => {
        dispatch(setNo(''));
        
        dispatch(deleteWorker(state.no));
        setClickState({ clicked : 'info' });
    }
    // Add worker 렌더링
    const addBtn = () => {
        setClickState({ clicked: 'add' });
    }
    const editBtn = () => {
        setClickState({ clicked : 'edit'});   
    }
    const searchBtn = () => {
        setClickState({ clicked: 'search' })
    }

    switch(clickState.clicked){
       
        case 'add' :
            return (
                <div>
                <h2>Add Worker</h2>
                <form>
                    <div>
                        <label>No:</label>
                        <input type="number" name="no" onChange={inputChange} />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={inputChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={inputChange} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="number" name="phone" onChange={inputChange} />
                    </div>
                    <button onClick={() => saveBtn()}>save</button>
                </form>
            </div>
            )
        case 'search' :
            return (
                <div>
                    <MainComponent />
                </div>
            )
        case 'edit' :  
            return (
                <div>
                    <EditWorkerComponent />
                </div>
            );
        case 'info' :
                return (     // post delete put요청 처리후 렌더링 
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
                                    <td>{inputState.no}</td>
                                    <td>{inputState.name}</td>
                                    <td>{inputState.email}</td>
                                    <td>{inputState.phone}</td>
                                    <td> 
                                        <button onClick={() => editBtn()} >edit</button>
                                        <button onClick={() => deleteBtn()} >delete</button>
                                    </td> 
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={() => searchBtn()}>search</button> 
                        <button onClick={() => addBtn()}>add</button> 
                    </div>
                ); 
         default:  // main에서 렌더링되는 부분
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
                                <td>{state.no}</td>
                                <td>{state.name}</td>
                                <td>{state.email}</td>
                                <td>{state.phone}</td>
                                <td>
                                    <button onClick={() => editBtn()}>edit</button>
                                    <button onClick={() => deleteBtn()}>delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={() => searchBtn()}>search</button>
                    <button onClick={() => addBtn()}>add</button> 
                </div>
                );
           
    }
}

export default WorkerListComponent;
