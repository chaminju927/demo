import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWorker } from '../../reducer/apiReducer';
import MainComponent from './MainComponent';
import { RootState, AppDispatch } from 'src/store';
import { listType } from 'src/types/common';


function EditWorkerComponent() : JSX.Element {  

    const [editState, setEditState] = useState<listType>({
        no: 0,
        name: '',
        phone: 0,
        email: '',
    });
    const dispatch: AppDispatch = useDispatch();
    const {data} = useSelector((state: RootState) => { 
        return {
            data: state.data
        };
    });
   
    useEffect(() => {
        // console.log(props);
        // console.log(data);
    }, [editState]);

    const editChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log({editState});
        // setEditState({
        //     no : data.no
        // });
        setEditState({ ...editState, [e.target.name]: e.target.value });
        //console.log({editState});
    }

    // put 요청
    const saveBtn = () => {
        // dispatch(editWorker(editState))
        // .then(() => {
        //    return(
        //        < MainComponent />
        //    );
        // });
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
