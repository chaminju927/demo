// import axios from 'axios';

// const USER_API_BASE_URL = "http://localhost:8080/worker";

// class ApiService {

<<<<<<< HEAD
//     fetchWorkerByNo(no){
//         return axios.get(USER_API_BASE_URL + '/' + no);
//     }
//     deleteWorker(no) {
//         return axios.delete(USER_API_BASE_URL + '/' + no);
//     }
//     // addWorker(worker) {
//     //     return axios.post(USER_API_BASE_URL, worker );
//     // }
//     // editWorker(no){
//     //     return axios.put(USER_API_BASE_URL + '/' + no, {

//     //     });
//     // }
//  }

//  export default new ApiService();
=======
    fetchWorkerByNo(no){
        return axios.get(USER_API_BASE_URL + '/' + no);
    }
    deleteWorker(no) {
        return axios.delete(USER_API_BASE_URL + '/' + no);
    }
    addWorker(worker) {
        return axios.post(USER_API_BASE_URL, worker);
    }
    editWorker(no, worker){  // no 변수 추가
        return axios.put(USER_API_BASE_URL + '/' + no, worker);
    }
}

export default new ApiService();
>>>>>>> 8faa17d038c436ad2dfd9d92a6679511625256be
