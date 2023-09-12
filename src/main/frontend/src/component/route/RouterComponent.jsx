import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import EditWorkerComponent from '../worker/EditWorkerComponent';
import AddWorkerComponent from '../worker/AddWorekerComponent';
import WorkerListComponent from '../worker/WorkerListComponent';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <div style={style}>
                 <Switch>   { /*불필요한 렌더링 없이 단 하나의 컴포넌트만 렌더링하여 사용할때 */}
                    {/* <Route exact path="/" Component={WorkerListComponent} />  exact path: 의도치 않은 렌더링 방지, 경로가 완벽히 일치하는 컴포넌트 렌더링 */}
                    <Route path="/worker" Component={WorkerListComponent}  />
                    <Route path="/add-worker" Component={AddWorkerComponent}  />
                    <Route path="/edit-worker" Component={EditWorkerComponent}  />
                </Switch>
            </div>
            </BrowserRouter>
        </div>
    )
}
const style= {
    color: 'red',
    margin: '10px'
}

export default AppRouter;