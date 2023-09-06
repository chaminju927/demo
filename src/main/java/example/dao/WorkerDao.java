package example.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import example.vo.Worker;

	@Mapper
	@Repository
	public interface WorkerDao {

	 Worker getWorker(int no);
	
	}

