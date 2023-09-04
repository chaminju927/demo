package example.service;


import org.springframework.beans.factory.annotation.Autowired;

import example.dao.WorkerDao;
import example.vo.Worker;

public class DefaultWorkerService implements WorkerService {

	@Autowired WorkerDao workerDao;

	@Override
	public Worker get(int no) {
		return (Worker)workerDao.getWorker(no);
	}
	
	

}
