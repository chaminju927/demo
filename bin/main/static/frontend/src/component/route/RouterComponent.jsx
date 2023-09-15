import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from '../worker/MainComponent';
import WorkerListComponent from '../worker/WorkerListComponent';
import AddWorkerComponent from '../worker/AddWorkerComponent';
import EditWorkerComponent from '../worker/EditWorkerComponent';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <div style={style}>
                 <Routes>  
                    <Route exact path="/" Component={MainComponent} />  { /* exact path: 의도치 않은 렌더링 방지, 경로가 완벽히 일치하는 컴포넌트 렌더링 */}
                    <Route path="/worker" Component={WorkerListComponent} />
                    <Route path="/add-worker" Component={AddWorkerComponent}  />  
                    <Route path="/edit-worker" Component={EditWorkerComponent}  />
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}
const style= {
    color: 'black',
    margin: '10px'
};
export default AppRouter;
