package example.service.Impl;


import org.springframework.stereotype.Service;

import example.dao.WorkerDao;
import example.service.WorkerService;
import example.vo.Worker;
import jakarta.annotation.Resource;

@Service
public class DefaultWorkerService implements WorkerService {

//	@Autowired WorkerDao workerDao;
	@Resource WorkerDao workerDao;

	@Override
	public Worker get(int no) {
		return workerDao.getWorker(no);
	}
	
	

}
