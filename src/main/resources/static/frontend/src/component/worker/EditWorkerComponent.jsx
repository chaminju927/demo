import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkerListComponent from './WorkerListComponent';
import { editWorker } from '../../slice/editWorkerSlice';
import { setNo, setName, setEmail, setPhone } from '../../slice/inputSlice';

function EditWorkerComponent() {
    const [clickState, setClickState] = useState({
        clicked : false
    })
    
    const dispatch = useDispatch();
    const state = useSelector((state) => state.get.data);
    //console.log(state);
    const inputState = useSelector((state) => state.input);
    //console.log(inputState.no);
   
    useEffect(() => {
       console.log('EditComponent mounted!');
    //    dispatch(setNo(state.no));   //get으로 받아온 데이터를 input스토어에 복사
    //    dispatch(setName(state.name));
    //    dispatch(setEmail(state.email));
    //    dispatch(setPhone(state.phone));
    }, []);

    // 스토어에 새로운 상태값 저장/ 입력 안한 부분은 state에서 가져옴
    const inputChange = (e) => {
        dispatch(setNo(state.no));   //get으로 받아온 데이터를 input스토어에 복사
        dispatch(setName(state.name));
        dispatch(setEmail(state.email));
        dispatch(setPhone(state.phone));

        const { name, value } = e.target;
        switch (name) {
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
    }

    // put 요청
    const saveBtn = () => {
        setClickState({ clicked : 'true'})
        
        dispatch(editWorker(inputState));
        //put 요청 처리 이후에는 state값을 inputstate값으로 바꿔줘야함
    }

    if(clickState.clicked){
        return (
            <div>
                <WorkerListComponent />
            </div>
        );
    }else {
        return (
            <div>
                <h2>Edit Worker</h2>
                <form>
                    <div>
                        <label>No:</label>
                        <input type="number" name="no" value={state.no} onChange={inputChange}  />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" defaultValue={state.name} onChange={inputChange}  />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" defaultValue={state.email} onChange={inputChange} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="number" name="phone" defaultValue={state.phone}  onChange={inputChange} />
                    </div>
                    <button onClick={() => saveBtn()}>save</button>
                </form>
            </div>
        );
    }
}

export default EditWorkerComponent;
