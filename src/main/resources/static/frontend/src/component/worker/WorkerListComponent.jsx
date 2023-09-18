import React, { useEffect, useState } from 'react';
import MainComponent from './MainComponent';
import EditWorkerComponent from './EditWorkerComponent';
import { useDispatch, useSelector } from 'react-redux';
//import { setNo, setName, setEmail, setPhone } from '../../slice/inputSlice';

function WorkerListComponent() {
    const [clickState, setClickState] = useState({
        clicked : ''
    });

    useEffect(()=>{
        console.log('liscomponent mounted!');
    }) 

    const state = useSelector((state) => state.get.data);
    console.log(state);
    const dispatch = useDispatch();

    const inputChange = (e) => {
       //console.log(e.target.value);
       const { inputName, value} = e.target;
       setValue({})
    }

   // const data = 
    const addWorker = (data) => {
        setClickState({ clicked : 'add' });
    }
    
    const deleteWorker = () => {

    }

    const editWorker = () => {
        setClickState({clicked: 'edit'})
    }

     const saveWorker = () => {
        dispatch(addWorker());
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
                    <button onClick={() => saveWorker()}>save</button>
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
                                <button onClick={() => editWorker()}>edit</button>
                                <button onClick={() => addWorker()}>add</button>  
                                <button onClick={() => deleteWorker()}>delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}
    
export default WorkerListComponent;
