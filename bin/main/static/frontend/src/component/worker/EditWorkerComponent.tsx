import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWorker } from '../../reducer/apiReducer';
import MainComponent, { dataType } from './MainComponent';
import { RootState, AppDispatch } from 'src/store';


function EditWorkerComponent(Info: dataType) : JSX.Element {  
    const {no, name, email, phone} = Info;

    const [editState, setEditState] = useState({
        no: no,
        name: name,
        phone: phone,
        email: email
    });

    const dispatch: AppDispatch = useDispatch();
    const {data} = useSelector((state: RootState) => { 
        return {
            //data: state.reducer.data //스토어에서 다시 확인
            data: state.data
        };
    });
   
    useEffect(() => {
        // console.log(props);
        // console.log(data);
    }, [editState]);

    const editChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log({editState});
        setEditState({ ...editState, [e.target.name]: e.target.value });
        //console.log({editState});

    }

    // put 요청
    const saveBtn = () => {
        dispatch(editWorker(editState))
        .then(() => {
           return(
               < MainComponent />
           );
        });
    }
    return (
        <div>
            <h2>Edit Worker</h2>
            <form>
                <div>
                    <label>No:</label>
                    <input type="number" name="no" value={data.no} readOnly={true} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" defaultValue={data.name} onChange={editChange}  />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" defaultValue={data.email} onChange={editChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="number" name="phone" defaultValue={data.phone}  onChange={editChange} />
                </div>
                <button onClick={() => saveBtn()}>save</button>
            </form>
        </div>
    );
}
export default EditWorkerComponent;
