// import { useState } from 'react';
// import ApiService from '../../ApiService';

// function AddWorkerComponent(props) {
//     const [state, setState] = useState({
//         no: '',
//         name: '',
//         email: '',
//         phone: '',
//         message: null
//     });

// function onChange(e) {
//     const fieldName = e.target.name;
//     const fieldValue = e.target.value;
//     setState(prevState => ({
//         ...prevState,
//         [fieldName]: fieldValue
//     }));
// }

// function saveWorker(e) {
//     e.preventDefault();
//     let worker = {
//         no: state.no,
//         name: state.name,
//         email: state.email,
//         phone: state.phone
//     }
//     ApiService.addWorker(worker)
//         .then(res => {
//             setState({ ...state, message: worker.name + ' 등록 완료' });
//             console.log(state.message);
//             props.history.push('/workers');
//         })
//         .catch(err => {
//             console.log('saveWorker() 에러', err);
//         })
// }

//     return (
//         <div>
//             <h2>Add Worker</h2>
//             <form>
//                 <div>
//                     <label>No:</label>
//                     <input type="number" name="no" value={state.no} onChange={onChange} />
//                 </div>
//                 <div>
//                     <label>Name:</label>
//                     <input type="text" name="name" value={state.name} onChange={onChange} />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="text" name="email" value={state.email} onChange={onChange} />
//                 </div>
//                 <div>
//                     <label>Phone:</label>
//                     <input type="number" name="phone" value={state.phone} onChange={onChange} />
//                 </div>
//                 <button onClick={saveWorker}>save</button>
//             </form>
//         </div>
//     )
// }

// export default AddWorkerComponent;
