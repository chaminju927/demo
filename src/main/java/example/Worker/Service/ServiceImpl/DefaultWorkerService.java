package example.Worker.Service.ServiceImpl;


import org.springframework.stereotype.Service;

import example.Worker.Dao.WorkerDao;
import example.Worker.Service.WorkerService;
import example.Worker.Vo.Worker;
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
