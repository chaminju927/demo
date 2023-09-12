import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditWorkerComponent from '../worker/EditWorkerComponent';
import AddWorkerComponent from '../worker/AddWorkerComponent'; // 오타 수정
import WorkerListComponent from '../worker/WorkerListComponent';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Routes>
                       <Route exact path="/" element={<WorkerListComponent />} />
                        <Route path="/worker" element={<WorkerListComponent />} />
                        <Route path="/add-worker" element={<AddWorkerComponent />} />
                        <Route path="/edit-worker" element={<EditWorkerComponent />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

const style = {
    color: 'red',
    margin: '10px',
};

export default AppRouter;
