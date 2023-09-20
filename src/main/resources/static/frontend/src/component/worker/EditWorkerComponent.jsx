import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWorker } from '../../slice/apiReducer';
import MainComponent from './MainComponent';
//import { useNavigate } from 'react-router-dom';

function EditWorkerComponent(props) {
    const [mainState, setMainState] = useState({
        no: props.no,
        name: props.name,
        phone: props.phone,
        email: props.email
    });

    console.log(props);
    const dispatch = useDispatch();
    const {data} = useSelector((state) => {  //비구조화 할당
        return {
            data: state.reducer.data
        };
    });
   
    useEffect(() => {
       console.log('EditComponent mounted!');
    }, []);

    const nameChange = (e) => {
        setMainState({ ...mainState, [e.target.name] : e.target.value });
    }
    const emailChange = (e) => {

    }
    const phoneChange = (e) => {

    }

    // put 요청
    const saveBtn = () => {
        dispatch(editWorker(mainState.no));
        return(
            < MainComponent />
        );
    }
    return (
        <div>
            <h2>Edit Worker</h2>
            <form>
                <div>
                    <label>No:</label>
                    <input type="number" name="no" value={data.no}  />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" defaultValue={data.name} onChange={nameChange}  />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" defaultValue={data.email} onChange={emailChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="number" name="phone" defaultValue={data.phone}  onChange={phoneChange} />
                </div>
                <button onClick={() => saveBtn()}>save</button>
            </form>
        </div>
    );
}
export default EditWorkerComponent;
