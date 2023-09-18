import React, { useEffect, useState } from 'react';
import MainComponent from './MainComponent';
import EditWorkerComponent from './EditWorkerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setNo, setName, setEmail, setPhone } from '../../slice/inputSlice';
import { addWorker } from '../../slice/addWorkerSlice'

function WorkerListComponent() {
    const [clickState, setClickState] = useState({
        clicked : ''
    });

    useEffect(()=>{
        console.log('liscomponent mounted!');
    }) 
    const state = useSelector((state) => state.get.data);
    console.log(state);
    const data = useSelector((state) => state.input);

    const dispatch = useDispatch();

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
      
   // add버튼 클릭시
    const addBtn = () => {
        setClickState({ clicked : 'add' });
    }
    
    const saveBtn = () => {
       dispatch(addWorker(data));
    }
    
    const deleteBtn = () => {

    }

    const editBtn = () => {
        setClickState({clicked: 'edit'})
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
                        <input type="text" name="name"  onChange={inputChange} />
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
        case 'delete' :
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
                            <td>{state.no}</td>
                            <td>{state.name}</td>
                            <td>{state.email}</td>
                            <td>{state.phone}</td>
                            <td>
                                <button onClick={() => editBtn()}>edit</button>
                                <button onClick={() => addBtn()}>add</button>  
                                <button onClick={() => deleteBtn()}>delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}
    
export default WorkerListComponent;
