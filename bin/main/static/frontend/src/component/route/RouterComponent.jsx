import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from '../worker/MainComponent';
import WorkerListComponent from '../worker/WorkerListComponent';
import EditWorkerComponent from '../worker/EditWorkerComponent';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                 <Routes>  
                    <Route exact path="/" Component={MainComponent} /> 
                    <Route path="/worker" Component={WorkerListComponent} />
                    <Route path="/edit-worker" Component={EditWorkerComponent}  />
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;
