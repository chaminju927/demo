package example.dao;

import org.springframework.stereotype.Repository;

import example.vo.Worker;

	@Repository
	public interface WorkerDao {

	 Worker getWorker(int no);
	
	}

