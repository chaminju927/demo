import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWorker, deleteWorker, addWorker } from '../../slice/apiReducer';
import axios from 'axios';
import EditWorkerComponent from './EditWorkerComponent';


function MainComponent() {
    const [workerData, setWorkerData] = useState([]); //메인 리스트
    const [mainState, setMainState] = useState({
        no: '',
        name: '',
        phone: '',
        email: '',
        clicked: ''
    });
    useEffect(() => {  
        //setMainState({ ...mainState, no : 3 }); 
        axios.get('/worker')  //메인 리스트 가져오기
          .then((response) => {
            setWorkerData(response.data);
            //console.log(response);
          })
          .catch((error) => {
            console.error('실패:', error);
          });
      },[]);

    //search이후 설정
    const {data} = useSelector((state) => {  //비구조화 할당
        return {
            data: state.reducer.data
        };
    });
    //const data = useSelector((state) => state.reducer.data);
    //console.log(data.no);
    const dispatch = useDispatch();

    
    const inputNoChange = (e) => {
        setMainState({ ...mainState, [e.target.name] : e.target.value });
      //  const inputNo = e.target.value;
        //console.log(inputNo);
     //   setMainState({ no : inputNo });
        console.log({mainState});
    }
    //search worker
    const searchBtn = () => {
        console.log(mainState.no);
        dispatch(getWorker(mainState.no)); 
        setMainState({ ...mainState, clicked: 'search'});
    }

    const addBtn = () => {
        //setMainState({ ...mainState });
        setMainState({ ...mainState, clicked: 'add'});
    }
    //delete 요청
    const deleteBtn = () => {
        setMainState({ ...mainState, no : data.no }); //리덕스 스토어 no를 usestate에 저장
        dispatch(deleteWorker(mainState.no));
        //삭제후 main버튼누를때 데이터 지원지도록 수정!!
    }

    const mainBtn = () => {
        setMainState({ ...mainState, clicked: ''}); 
    }
    const editBtn = () => {
       setMainState({ ...mainState, clicked: 'edit'});
    }

    //add worker
    const saveBtn = () => {  
        setMainState({ ...mainState, clicked: ''});
        dispatch(addWorker(mainState));
    }

     const addChange = (e) => {
        setMainState({ ...mainState, [e.target.name] : e.target.name });
       //console.log({mainState});
        // const name = e.target;
        // const value = e.target.value;
        // switch (name) {
        //   case 'no':
        //     setMainState({ ...mainState, no : value });
        //     console.log(mainState);
        //     break;
        //   case 'name':
        //     setMainState({ ...mainState, name : value });
        //     break;
        //   case 'email':
        //     setMainState({ ...mainState, email : value });
        //     break;
        //   case 'phone':
        //     setMainState({ ...mainState, phone : value });
        //     break;
        //   default:
        //     break;
        // }
      };


   switch(mainState.clicked){
        case 'search' :  //search 결과
            return (   
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
                        <input type="number" name="no"  onChange={addChange} value={mainState.no}/>
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" onChange={addChange} value={mainState.name} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={addChange} value={mainState.email} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="number" name="phone" onChange={addChange} value={mainState.phone}/>
                    </div>
                    <button onClick={() => saveBtn()}>save</button>
                </form>
            </div>
            );
        case 'edit' : 
            return (
                <div>
                    <EditWorkerComponent mainState={mainState} />
                </div>
            )
        default  :
            return (
                <div>
                    <h2>Search</h2>
                    <input type="number" name="no" placeholder="사번 입력" onChange={() => inputNoChange()} value={mainState.no}  />
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