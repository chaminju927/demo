package com.example.Worker.Service.ServiceImpl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	@Override
	public List<Worker> getAll() {
		return workerDao.getAllWorker();
	}
	
	  @Override
	  public void add(Worker worker) {
	    workerDao.insert(worker);

	  }

	@Override
	public void delete(int no) {
		workerDao.delete(no);
	}

	@Override
	public void update(Worker worker) {
		workerDao.update(worker);
		//return worker;	
	}

	
	

}
