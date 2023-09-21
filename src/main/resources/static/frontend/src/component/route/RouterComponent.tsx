import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from '../worker/MainComponent';
import EditWorkerComponent from '../worker/EditWorkerComponent';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                 <Routes>  
                    <Route path="/" Component={MainComponent} /> 
                    <Route path="/edit" Component={EditWorkerComponent}  />
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;
