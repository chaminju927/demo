import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWorker, deleteWorker, addWorker} from '../../reducer/apiReducer';
import axios from 'axios';
//import EditWorkerComponent from './EditWorkerComponent';
import { RootState, AppDispatch } from 'src/store';
import { newType, dataType } from 'src/types/common';


function MainComponent(): JSX.Element {
   
    const [workerData, setWorkerData] = useState<dataType[]>([]); 
    const [mainState, setMainState] = useState<newType>({
      data : 
        {  
            no: 0,
            name: '',
            phone: 0,
            email: ''
        },
        clicked: ''
    });

 
    useEffect(() => { 
        async (): Promise<dataType> => {
            const result = await axios.get<dataType>('/worker');
            return result.data;
        }
      },[ workerData ]);  // workerData값에 의존성 추가

    //search이후 설정
    const {data} = useSelector((state : RootState) => {
        return {
            data: state.data
        };
    });
    //const data = useSelector((state: RootState) => state.reducer.data);
    const dispatch: AppDispatch = useDispatch();
    
    const inputNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMainState({ ...mainState, [e.target.name] : e.target.value });
        //console.log({mainState});
    }
    //search worker
    const searchBtn = () => {
        //console.log(mainState);
        dispatch(getWorker(mainState.data.no)); //파라미터 수정
        setMainState({ ...mainState, clicked : 'search' });
    }

    //add worker 리턴
    const addBtn = () => {
        setMainState({ ...mainState, clicked: 'add'});
    }
    //delete 요청
    // const deleteBtn = () => {
    //     setMainState({ ...mainState, data.no : data.no }); 
    //     dispatch(deleteWorker(mainState.no)); //파라미터 수정
    //     setMainState({ no: '', name: '', phone: '', email: '', clicked: '' });
    // }

    // const mainBtn = () => {
    //     setMainState({ no: '', name: '', phone: '', email: '', clicked: ''}); 
    // }

    // const editBtn = () => {
    //    setMainState({ no: data.no, name: data.name, phone: data.phone, email: data.email, clicked: 'edit'});
    //    //console.log({mainState});
    // }

    // // post요청
    // const saveBtn = () => {

    //     setMainState({ ...mainState, clicked: '' });
    //     dispatch(addWorker(mainState)) 
    //     .then(() => {
    //         // input값 초기화 -> 메인에서 인풋값 공란으로
    //        setMainState({ no: 0, name: '', phone: '', email: '', clicked: '' })
    //     });
    // };

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
                            {/* <tr>
                                <td>{workerData.no}</td>
                                <td>{workerData.name}</td>
                                <td>{workerData.email}</td>
                                <td>{workerData.phone}</td>
                                <td>
                                    <button onClick={() => editBtn()}>edit</button>
                                    <button onClick={() => deleteBtn()}>delete</button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                    {/* <button onClick={() => mainBtn()}>main</button> */}
                    <button onClick={() => addBtn()}>add</button> 
                </div>
                );
        // case 'add':
        //     return (
        //         <div>
        //         <h2>Add Worker</h2>
        //         <form>
        //             <div>
        //                 <label>No:</label>
        //                 <input type="number" name="no"  onChange={addChange} value={mainState.no}/>
        //             </div>
        //             <div>
        //                 <label>Name:</label>
        //                 <input type="text" name="name" onChange={addChange} value={mainState.name} />
        //             </div>
        //             <div>
        //                 <label>Email:</label>
        //                 <input type="text" name="email" onChange={addChange} value={mainState.email} />
        //             </div>
        //             <div>
        //                 <label>Phone:</label>
        //                 <input type="number" name="phone" onChange={addChange} value={mainState.phone}/>
        //             </div>
        //             <button onClick={() => saveBtn()}>save</button>
        //         </form>
        //     </div>
        //     );
        // case 'edit' : 
        //     return (
        //         <div>
        //             <EditWorkerComponent workerType ={workerType} />
        //         </div>
        //     )
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
                            {workerData.map((worker, index) => (
                                <tr key={index}>
                                <td>{worker.no}</td>
                                <td>{worker.name}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                </div>
            );
         

   }
  
  
}
export default MainComponent;