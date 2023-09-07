package example.Worker.Service.ServiceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import example.Worker.Dao.WorkerDao;
import example.Worker.Service.WorkerService;
import example.Worker.Vo.Worker;

@Service
public class DefaultWorkerService implements WorkerService {

	@Autowired(required=true) WorkerDao workerDao;
	
	@Override
	public Worker get(int no) {
		return workerDao.getWorker(no);
	}
	
	

}
