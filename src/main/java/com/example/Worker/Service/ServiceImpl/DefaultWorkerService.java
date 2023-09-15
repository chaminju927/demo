package com.example.Worker.Service.ServiceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.Worker.Dao.WorkerDao;
import com.example.Worker.Service.WorkerService;
import com.example.Worker.Vo.Worker;

@Service
public class DefaultWorkerService implements WorkerService {

	@Autowired(required=true) WorkerDao workerDao;
	
	@Override
	public Worker get(int no) {
		return workerDao.getWorker(no);
	}
	
//	@Override
//	public String get(int no) {
//		return workerDao.getWorker(no);
//	}

	  @Override
	  public void add(Worker worker) {
	    workerDao.insert(worker);

	  }

	@Override
	public void delete(int no) {
		workerDao.delete(no);
	}

	@Override
	public Worker update(Worker worker) {
		workerDao.update(worker);
		return worker;	
	}
	
	

}
