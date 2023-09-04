package example.service.Impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import example.dao.WorkerDao;
import example.service.WorkerService;
import example.vo.Worker;

@Service
public class DefaultWorkerService implements WorkerService {

	@Autowired WorkerDao workerDao;

	@Override
	public Worker get(int no) {
		return workerDao.getWorker(no);
	}
	
	

}
